const channel = Uint8Array.from([255,0,0,0]);
const command = 193

export const bytesToPackages = (bytes: Uint8Array): Uint8Array[] => {
    let message = (new Uint8Array(64)).fill(238)
    message.set(channel);
    message.set([command], 4);
    let length = new DataView(Uint16Array.from([bytes.length]).buffer)
    message.set([length.getUint8(1), length.getUint8(0)], 5);
    message.set(bytes, 7)
    return [message];
}

export const packagesToBytes = (packages: Uint8Array[]): Uint8Array => {
    return packages[0].slice(7, 7 + packages[0][6]);
}
