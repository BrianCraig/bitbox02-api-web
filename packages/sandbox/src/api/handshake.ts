import { Device, Encryption } from './device'
import { u8join } from './utils';
const Rust = import('noise-wasm');

const fakeAttestation = Uint8Array.from([0, 97, 39, 192, 192, 192, 72, 254, 120, 86, 137, 4, 226, 24, 107, 229, 59, 102, 237, 166, 155, 79, 42, 155, 132, 103, 119, 237, 246, 254, 75, 172, 108, 74])
const unlock = Uint8Array.from([0, 117]);
const cleanYourHandsBeforeHandshake = Uint8Array.from([0, 104]);
const inHandshake = Uint8Array.from([0, 72]);

export const initialize = async (device: Pick<Device, "send" | "info">) => {
  const { send } = device;
  await send(fakeAttestation);

  device.info = {...device.info, attestation: true}

  if (!device.info.unlocked){
    await send(unlock);
    device.info = {...device.info, unlocked: true}
  }
}

export const handshake = async (device: Pick<Device, "send" | "info">) => {
  await device.send(cleanYourHandsBeforeHandshake);

  let r = (await Rust).Noise.new()
  // send initial 32 bytes handshake
  let init = new Uint8Array(32);
  r.write(new Uint8Array(), init);
  let response = await device.send(u8join(inHandshake, init));

  //digest info
  r.read(response.slice(2,98), new Uint8Array(0));

  // send final ack
  let share = new Uint8Array(64)
  r.write(new Uint8Array(), share);

  let deviceStatus = (await device.send(u8join(inHandshake, share)))[2];

  device.info = { ...device.info, encrypted: true, deviceAcceptedPairing: deviceStatus === 0 ? true : null }

  const crypto: Encryption = {
    encrypt: (data) => {
      let out = new Uint8Array(data.length + 16);
      r.encrypt(data, out);
      return out
    },
    decrypt: (data) => {
      let out = new Uint8Array(data.length - 16);
      r.decrypt(data, out);
      return out
    }
  }

  return crypto;
}
