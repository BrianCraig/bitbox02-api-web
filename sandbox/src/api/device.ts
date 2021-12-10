import { Info, infoDigest, infoRequest } from "./messages"
import { packagesToBytes, bytesToPackages } from "./uh2Frame"

export interface Device {
  send: (data: Uint8Array) => Promise<Uint8Array>,
  info: Info
}

interface connectOptions {
  onInfo?: (info: Info) => any; 
  onClose?: () => any;
}

export const connect = async ({onInfo}: connectOptions = {}): Promise<Device> => {
  const HIDs = await window.navigator.hid.requestDevice({ filters: [{vendorId: 0x03eb }]})
  const HID = HIDs[0]
  HID.oninputreport = ({data}) => {
    packagesToBytes([new Uint8Array(data.buffer)]);
  }
  await HID.open()

  const send = async (data: Uint8Array): Promise<Uint8Array> => {
    bytesToPackages(data).forEach((packet) => HID.sendReport(0, packet));
    let prom = new Promise<Uint8Array>((resolver) => {
      HID.oninputreport = ({data}) => {
        resolver(packagesToBytes([new Uint8Array(data.buffer)]));
      }
    })
    return prom;
  }

  const info = infoDigest(await send(infoRequest()));

  onInfo?.(info);

  return ({
    send,
    info
  })
}
