function add(accumulator: number, a: number) {
  return accumulator + a;
}

export const u8join = (...params: Uint8Array[]): Uint8Array => { 
  let size = params.map(e => e.length).reduce(add, 0);
  const uint8 = new Uint8Array(size); 
  let pos = 0;
  for(let arr of params){
    uint8.set(arr, pos);
    pos += arr.length;
  }
  return uint8;
}
