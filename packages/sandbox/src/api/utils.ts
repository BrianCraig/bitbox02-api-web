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


const HARDENED = 0x80000000;


/**
 * @param keypathString keypath in string format e.g. m/44'/1'/0'/0
 * @returns keypath as array e.g. [2147483692, 2147483649, 2147483648, 0]
 */
 export const getKeypathFromString = (keypathString: string) => {
  let levels = keypathString.toLowerCase().split('/');
  if (levels[0] !== 'm') throw new Error('Invalid keypath');
  levels = levels.slice(1);

  return levels.map(level => {
      let hardened = false;
      if (level.substring(level.length - 1) === "'") {
          hardened = true
      }
      let x = parseInt(level, 10);
      if (isNaN(x) || x < 0 || x >= HARDENED) {
          throw new Error('Invalid keypath');
      }
      if (hardened) x += HARDENED;
      return x;
  })
}

export const withOp = (data: Uint8Array) => u8join(Uint8Array.from([0, 110]), data) 
export const withoutOp = (data: Uint8Array) => data.slice(2) 
