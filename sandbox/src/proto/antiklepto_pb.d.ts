import * as jspb from 'google-protobuf'



export class AntiKleptoHostNonceCommitment extends jspb.Message {
  getCommitment(): Uint8Array | string;
  getCommitment_asU8(): Uint8Array;
  getCommitment_asB64(): string;
  setCommitment(value: Uint8Array | string): AntiKleptoHostNonceCommitment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AntiKleptoHostNonceCommitment.AsObject;
  static toObject(includeInstance: boolean, msg: AntiKleptoHostNonceCommitment): AntiKleptoHostNonceCommitment.AsObject;
  static serializeBinaryToWriter(message: AntiKleptoHostNonceCommitment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AntiKleptoHostNonceCommitment;
  static deserializeBinaryFromReader(message: AntiKleptoHostNonceCommitment, reader: jspb.BinaryReader): AntiKleptoHostNonceCommitment;
}

export namespace AntiKleptoHostNonceCommitment {
  export type AsObject = {
    commitment: Uint8Array | string,
  }
}

export class AntiKleptoSignerCommitment extends jspb.Message {
  getCommitment(): Uint8Array | string;
  getCommitment_asU8(): Uint8Array;
  getCommitment_asB64(): string;
  setCommitment(value: Uint8Array | string): AntiKleptoSignerCommitment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AntiKleptoSignerCommitment.AsObject;
  static toObject(includeInstance: boolean, msg: AntiKleptoSignerCommitment): AntiKleptoSignerCommitment.AsObject;
  static serializeBinaryToWriter(message: AntiKleptoSignerCommitment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AntiKleptoSignerCommitment;
  static deserializeBinaryFromReader(message: AntiKleptoSignerCommitment, reader: jspb.BinaryReader): AntiKleptoSignerCommitment;
}

export namespace AntiKleptoSignerCommitment {
  export type AsObject = {
    commitment: Uint8Array | string,
  }
}

export class AntiKleptoSignatureRequest extends jspb.Message {
  getHostNonce(): Uint8Array | string;
  getHostNonce_asU8(): Uint8Array;
  getHostNonce_asB64(): string;
  setHostNonce(value: Uint8Array | string): AntiKleptoSignatureRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AntiKleptoSignatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AntiKleptoSignatureRequest): AntiKleptoSignatureRequest.AsObject;
  static serializeBinaryToWriter(message: AntiKleptoSignatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AntiKleptoSignatureRequest;
  static deserializeBinaryFromReader(message: AntiKleptoSignatureRequest, reader: jspb.BinaryReader): AntiKleptoSignatureRequest;
}

export namespace AntiKleptoSignatureRequest {
  export type AsObject = {
    hostNonce: Uint8Array | string,
  }
}

