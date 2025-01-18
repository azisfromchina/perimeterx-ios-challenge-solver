function getFirst4BytesAsHexN(str) {
  const sliced = str.slice(0, 4);
  let hex = '0x';
  for (let i = 0; i < sliced.length; i++) {
    hex += sliced.charCodeAt(i).toString(16).padStart(2, '0');
  }

  return hex;
}

function sub_30dc4(arg1, arg2, arg3, arg4, arg5) {
  let A1 = BigInt(arg1);
  let A2 = BigInt(arg2);
  let A3 = BigInt(arg3);
  let A4 = BigInt(arg4);

  let x8_4 = 10n;
  let x9_2 = A4 % 10n;

  if (x9_2 !== 0n) {
    x8_4 = x9_2;
    if (x9_2 === -1n) {
      throw new Error("trap(1) // x9_2 == -1 => TRAP");
    }
  }

  let x9_4;
  if (x8_4 === 0n) {
    throw new Error("trap(1) // mod by zero");
  } else {
    x9_4 = A3 % x8_4;
  }

  if (x9_4 > 9n) {
    return -1n;
  }

  let x25_1 = A1 * A1;
  let x8_5 = A2 * A2;

  switch (x9_4) {
    case 0n: {
      let x8_6 = x8_5 ^ A1;
      const result = x25_1 - x8_6;
      if (inRange64(x25_1) && inRange64(-x8_6) && inRange64(result)) {
        return result;
      } else {
        throw new Error("trap(1) // overflow in case 0");
      }
    }
    case 1n:
      return (A2 + A1) * A1;
    case 2n:
      return x8_5 + A1;
    case 3n:
      return (A2 ^ A1) + A1;
    case 4n: {
      let x21_1 = getFirst4BytesAsHexN(arg5); // first 4 lines of appName in hex
      let x21_1BigInt = BigInt(x21_1)
      return x21_1BigInt ^ (x25_1 * A2);
    }
    case 5n:
      return A1 - x8_5;
    case 6n:
      return (x25_1 ^ A2) + x8_5;
    case 7n:
      return x25_1 + A2;
    case 8n:
      return A1 + (A1 * A2);
    case 9n:
      return x25_1 + (A2 + 0x14bn) * (A2 + 0x14bn);
    default:
      return -1n;
  }
}

function inRange64(x) {
  const MIN_64 = -0x8000000000000000n;
  const MAX_64 =  0x7fffffffffffffffn;
  return (x >= MIN_64 && x <= MAX_64);
}
