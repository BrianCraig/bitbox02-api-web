import { handshake } from "./handshake"
import { Info, infoDigest, infoRequest } from "./messages"
import { packagesToBytes, bytesToPackages, headerInfo } from "./uh2Frame"

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const retryPacket = bytesToPackages(Uint8Array.from([1]))[0];

const showCode = Uint8Array.from([0, 118]);

export type SendHID = (data: Uint8Array) => Promise<Uint8Array>
export interface Device {
  send: SendHID
  info: Info
  close: () => void
}
interface connectOptions {
  onInfo?: (info: Info) => any;
  onClose?: () => any;
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

  let status = await handshake(send);

  if(status === 1){
    let status = await(send(showCode));
    if(status[1] === 1){
      throw new Error("Pairing code not accepted")
    }
  }

  return ({
    send,
    info,
    close: () => HID.close()
  })
}
