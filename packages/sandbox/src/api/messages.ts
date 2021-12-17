import { Device } from "./device";

export const infoRequest = Uint8Array.from([105]);

const textDecoder = new TextDecoder();

export interface Info {
  version?: {
    major: number
    minor: number
    patch: number
  }
  platformId?: number
  editionId?: number
  unlocked?: boolean
  attestation?: boolean
  encrypted?: boolean 
  deviceAcceptedPairing?: null | boolean // undefined: unknown, null: checking, false: rejected, true: accepted 
}

export const infoDigest = (data: Uint8Array): Info => {
  const vLength = data[0];
  const vString = textDecoder.decode(data.slice(1, 1 + vLength));
  const info = data.slice(1 + vLength);
  const versions = vString.match(/[0-9]+/g)!.map(parseFloat);
  return {
    version: {
      major: versions[0],
      minor: versions[1],
      patch: versions[2]
    },
    platformId: info[0],
    editionId: info[1],
    unlocked: !!info[2]
  }
}

export const infoQuery = async (device: Pick<Device, "send" | "info">) => {
  device.info = { 
    ...device.info, 
    ...infoDigest(await device.send(infoRequest))
  };
}
