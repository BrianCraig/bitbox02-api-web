import * as jspb from 'google-protobuf'



export class PubResponse extends jspb.Message {
  getPub(): string;
  setPub(value: string): PubResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PubResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PubResponse): PubResponse.AsObject;
  static serializeBinaryToWriter(message: PubResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PubResponse;
  static deserializeBinaryFromReader(message: PubResponse, reader: jspb.BinaryReader): PubResponse;
}

export namespace PubResponse {
  export type AsObject = {
    pub: string,
  }
}

export class RootFingerprintRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RootFingerprintRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RootFingerprintRequest): RootFingerprintRequest.AsObject;
  static serializeBinaryToWriter(message: RootFingerprintRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RootFingerprintRequest;
  static deserializeBinaryFromReader(message: RootFingerprintRequest, reader: jspb.BinaryReader): RootFingerprintRequest;
}

export namespace RootFingerprintRequest {
  export type AsObject = {
  }
}

export class RootFingerprintResponse extends jspb.Message {
  getFingerprint(): Uint8Array | string;
  getFingerprint_asU8(): Uint8Array;
  getFingerprint_asB64(): string;
  setFingerprint(value: Uint8Array | string): RootFingerprintResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RootFingerprintResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RootFingerprintResponse): RootFingerprintResponse.AsObject;
  static serializeBinaryToWriter(message: RootFingerprintResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RootFingerprintResponse;
  static deserializeBinaryFromReader(message: RootFingerprintResponse, reader: jspb.BinaryReader): RootFingerprintResponse;
}

export namespace RootFingerprintResponse {
  export type AsObject = {
    fingerprint: Uint8Array | string,
  }
}

export class XPub extends jspb.Message {
  getDepth(): Uint8Array | string;
  getDepth_asU8(): Uint8Array;
  getDepth_asB64(): string;
  setDepth(value: Uint8Array | string): XPub;

  getParentFingerprint(): Uint8Array | string;
  getParentFingerprint_asU8(): Uint8Array;
  getParentFingerprint_asB64(): string;
  setParentFingerprint(value: Uint8Array | string): XPub;

  getChildNum(): number;
  setChildNum(value: number): XPub;

  getChainCode(): Uint8Array | string;
  getChainCode_asU8(): Uint8Array;
  getChainCode_asB64(): string;
  setChainCode(value: Uint8Array | string): XPub;

  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): XPub;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): XPub.AsObject;
  static toObject(includeInstance: boolean, msg: XPub): XPub.AsObject;
  static serializeBinaryToWriter(message: XPub, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): XPub;
  static deserializeBinaryFromReader(message: XPub, reader: jspb.BinaryReader): XPub;
}

export namespace XPub {
  export type AsObject = {
    depth: Uint8Array | string,
    parentFingerprint: Uint8Array | string,
    childNum: number,
    chainCode: Uint8Array | string,
    publicKey: Uint8Array | string,
  }
}

export class Keypath extends jspb.Message {
  getKeypathList(): Array<number>;
  setKeypathList(value: Array<number>): Keypath;
  clearKeypathList(): Keypath;
  addKeypath(value: number, index?: number): Keypath;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Keypath.AsObject;
  static toObject(includeInstance: boolean, msg: Keypath): Keypath.AsObject;
  static serializeBinaryToWriter(message: Keypath, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Keypath;
  static deserializeBinaryFromReader(message: Keypath, reader: jspb.BinaryReader): Keypath;
}

export namespace Keypath {
  export type AsObject = {
    keypathList: Array<number>,
  }
}

