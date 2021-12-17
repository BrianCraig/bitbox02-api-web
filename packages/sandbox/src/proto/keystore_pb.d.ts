import * as jspb from 'google-protobuf'



export class ElectrumEncryptionKeyRequest extends jspb.Message {
  getKeypathList(): Array<number>;
  setKeypathList(value: Array<number>): ElectrumEncryptionKeyRequest;
  clearKeypathList(): ElectrumEncryptionKeyRequest;
  addKeypath(value: number, index?: number): ElectrumEncryptionKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElectrumEncryptionKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ElectrumEncryptionKeyRequest): ElectrumEncryptionKeyRequest.AsObject;
  static serializeBinaryToWriter(message: ElectrumEncryptionKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElectrumEncryptionKeyRequest;
  static deserializeBinaryFromReader(message: ElectrumEncryptionKeyRequest, reader: jspb.BinaryReader): ElectrumEncryptionKeyRequest;
}

export namespace ElectrumEncryptionKeyRequest {
  export type AsObject = {
    keypathList: Array<number>,
  }
}

export class ElectrumEncryptionKeyResponse extends jspb.Message {
  getKey(): string;
  setKey(value: string): ElectrumEncryptionKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElectrumEncryptionKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ElectrumEncryptionKeyResponse): ElectrumEncryptionKeyResponse.AsObject;
  static serializeBinaryToWriter(message: ElectrumEncryptionKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElectrumEncryptionKeyResponse;
  static deserializeBinaryFromReader(message: ElectrumEncryptionKeyResponse, reader: jspb.BinaryReader): ElectrumEncryptionKeyResponse;
}

export namespace ElectrumEncryptionKeyResponse {
  export type AsObject = {
    key: string,
  }
}

