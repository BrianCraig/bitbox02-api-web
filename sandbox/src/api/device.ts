import { handshake } from "./handshake"
import { Info, infoDigest, infoRequest } from "./messages"
import { packagesToBytes, bytesToPackages, headerInfo } from "./uh2Frame"
import { ETHCoin, ETHPubRequest, ETHRequest, ETHResponse } from '../proto/eth_pb';
import { Request, Response } from '../proto/hww_pb'
import { getKeypathFromString, u8join } from "./utils";

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const retryPacket = bytesToPackages(Uint8Array.from([1]))[0];

const showCode = Uint8Array.from([0, 118]);

export type SendHID = (data: Uint8Array) => Promise<Uint8Array>

export interface Encryption {
  encrypt: (data: Uint8Array) => Uint8Array
  decrypt: (data: Uint8Array) => Uint8Array
}
export interface Device {
  send: SendHID
  info: Info
  close: () => void
  eth: () => Promise<Response.AsObject>
}
interface connectOptions {
  onInfo?: (info: Info) => any;
  onClose?: () => any;
}

const withOp = (data: Uint8Array) => u8join(Uint8Array.from([0, 110]), data) 
const withoutOp = (data: Uint8Array) => data.slice(2) 

const ethPublic = (send: SendHID, {encrypt, decrypt}: Encryption ) => async (): Promise<Response.AsObject> => {
  let req = new ETHPubRequest()
  req.setCoin(ETHCoin.ETH)
  req.setKeypathList(getKeypathFromString("m/44'/60'/0'/0/0"))
  req.setDisplay(true)
  req.setOutputType(ETHPubRequest.OutputType.ADDRESS)
  req.setContractAddress(new Uint8Array())
  let wr = new ETHRequest();
  wr.setPub(req);
  let wr2 = new Request();
  wr2.setEth(wr);
  let data = wr2.serializeBinary();
  let resp = decrypt(withoutOp(await send(withOp(encrypt(data)))));
  return Response.deserializeBinary(resp).toObject();
}

export const connect = async ({ onInfo }: connectOptions = {}): Promise<Device> => {
  const HIDs = await window.navigator.hid.requestDevice({ filters: [{ vendorId: 0x03eb }] })
  const HID = HIDs[0]
  await HID.open()

  const send = async (data: Uint8Array): Promise<Uint8Array> => {
    const start = performance.now();
    let info: any = {
      sent: {
        data,
        opCode: data[0],
        query: data[0] === 0 ? data[1] : undefined,
      },
      waitFrames: 0
    }
    console.log(info);
    bytesToPackages(data).forEach((packet) => HID.sendReport(0, packet));
    let prom = new Promise<Uint8Array>((resolver) => {
      const allPackets: Uint8Array[] = [];
      HID.oninputreport = ({ data }) => {
        const packet = new Uint8Array(data.buffer)
        if(allPackets.length === 0 && packet[7] === 1) { //waiting for input
          sleep(200).then(() => HID.sendReport(0, retryPacket));
          info.waitFrames++;
          return;
        }
        allPackets.push(packet)
        const { packets } = headerInfo(allPackets[0]);
        if(allPackets.length === packets){
          const receivedData = packagesToBytes(allPackets);
          info.time = (performance.now() - start).toFixed(6);
          info.received = {
            data: receivedData,
            opCode: receivedData[0],
            query: receivedData[0] === 0 ? receivedData[1] : undefined
          }
          resolver(receivedData);
        }
      }
    })
    return prom;
  }
  const info = infoDigest(await send(infoRequest()));
  onInfo?.(info);

  let enc = await handshake(send);

  //if(status === 1){
    let status = await(send(showCode));
    if(status[1] === 1){
      throw new Error("Pairing code not accepted")
    }
  //}

  return ({
    send,
    info,
    close: () => HID.close(),
    eth: ethPublic(send, enc)
  })
}
