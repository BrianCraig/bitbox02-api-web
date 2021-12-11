import { SendHID } from './device'
import { u8join } from './utils';
const Rust = import('hello-wasm-pack');

const fakeAttestation = Uint8Array.from([0, 97, 39, 192, 192, 192, 72, 254, 120, 86, 137, 4, 226, 24, 107, 229, 59, 102, 237, 166, 155, 79, 42, 155, 132, 103, 119, 237, 246, 254, 75, 172, 108, 74])
const unlock = Uint8Array.from([0, 117]);
const canIHandshake = Uint8Array.from([0, 104]);
const inHandshake = Uint8Array.from([0, 72]);

export const handshake = async (send: SendHID) => {
  let r = (await Rust).Noise.new()

  await send(fakeAttestation);
  await send(unlock);
  await send(canIHandshake);

  // send initial 32 bytes handshake
  let init = new Uint8Array(32);
  r.write(new Uint8Array(), init);
  let response = await send(u8join(inHandshake, init));

  //digest info
  r.read(response.slice(2,98), new Uint8Array(0));

  // send final ack
  let share = new Uint8Array(64)
  r.write(new Uint8Array(), share);

  let res = await send(u8join(inHandshake, share));

  return res[2];
}
