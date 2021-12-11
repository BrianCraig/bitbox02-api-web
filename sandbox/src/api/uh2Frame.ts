const channel = Uint8Array.from([255, 0, 0, 0]);
const command = 193

const sizeToPackets = (size: number) => Math.ceil((size-57) / 59) + 1

export const headerInfo = (bytes: Uint8Array) => {
  const size = bytes[5] * 256 + bytes[6] 
  return {
    size,
    packets: sizeToPackets(size)
  }
} 

export const bytesToPackages = (bytes: Uint8Array): Uint8Array[] => {
  const packets = Array.from(Array(sizeToPackets(bytes.length)).keys(), () => new Uint8Array(64));

  const totalToWrite = bytes.length;
  let offset = 0;

  for(let i = 0; i < packets.length; i++){
    const packet = packets[i];
    packet.fill(238);
    packet.set(channel);
    packet.set([i === 0 ? command : (i-i)], 4);

    const maxLengthToWrite = 64 - ( i===0 ? 7 : 5 );
    const writeOf = Math.min(totalToWrite - offset, maxLengthToWrite);
    
    packet.set(bytes.subarray(offset, offset + writeOf), i===0 ? 7 : 5) 

    offset += writeOf;
  }
  let length = new DataView(Uint16Array.from([bytes.length]).buffer)
  packets[0].set([length.getUint8(1), length.getUint8(0)], 5);
  return packets;
}

export const packagesToBytes = (packets: Uint8Array[]): Uint8Array => {
  const { size } = headerInfo(packets[0]); 
  let frame = new Uint8Array(size);
  let pos = 0;
  for(let i = 0; i < packets.length; i++){
    let read = Math.min(size-pos, i===0 ? 57 : 59)
    let start = i===0 ? 7 : 5
    frame.set(
      packets[i].slice(start, start + read),
      pos
    )
    pos += read;
  }
  return frame;
}
