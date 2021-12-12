import * as jspb from 'google-protobuf'



export class RebootRequest extends jspb.Message {
  getPurpose(): RebootRequest.Purpose;
  setPurpose(value: RebootRequest.Purpose): RebootRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RebootRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RebootRequest): RebootRequest.AsObject;
  static serializeBinaryToWriter(message: RebootRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RebootRequest;
  static deserializeBinaryFromReader(message: RebootRequest, reader: jspb.BinaryReader): RebootRequest;
}

export namespace RebootRequest {
  export type AsObject = {
    purpose: RebootRequest.Purpose,
  }

  export enum Purpose { 
    UPGRADE = 0,
    SETTINGS = 1,
  }
}

