import * as jspb from 'google-protobuf'



export class CheckSDCardRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckSDCardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckSDCardRequest): CheckSDCardRequest.AsObject;
  static serializeBinaryToWriter(message: CheckSDCardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckSDCardRequest;
  static deserializeBinaryFromReader(message: CheckSDCardRequest, reader: jspb.BinaryReader): CheckSDCardRequest;
}

export namespace CheckSDCardRequest {
  export type AsObject = {
  }
}

export class CheckSDCardResponse extends jspb.Message {
  getInserted(): boolean;
  setInserted(value: boolean): CheckSDCardResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckSDCardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckSDCardResponse): CheckSDCardResponse.AsObject;
  static serializeBinaryToWriter(message: CheckSDCardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckSDCardResponse;
  static deserializeBinaryFromReader(message: CheckSDCardResponse, reader: jspb.BinaryReader): CheckSDCardResponse;
}

export namespace CheckSDCardResponse {
  export type AsObject = {
    inserted: boolean,
  }
}

export class DeviceInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceInfoRequest): DeviceInfoRequest.AsObject;
  static serializeBinaryToWriter(message: DeviceInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceInfoRequest;
  static deserializeBinaryFromReader(message: DeviceInfoRequest, reader: jspb.BinaryReader): DeviceInfoRequest;
}

export namespace DeviceInfoRequest {
  export type AsObject = {
  }
}

export class DeviceInfoResponse extends jspb.Message {
  getName(): string;
  setName(value: string): DeviceInfoResponse;

  getInitialized(): boolean;
  setInitialized(value: boolean): DeviceInfoResponse;

  getVersion(): string;
  setVersion(value: string): DeviceInfoResponse;

  getMnemonicPassphraseEnabled(): boolean;
  setMnemonicPassphraseEnabled(value: boolean): DeviceInfoResponse;

  getMonotonicIncrementsRemaining(): number;
  setMonotonicIncrementsRemaining(value: number): DeviceInfoResponse;

  getSecurechipModel(): string;
  setSecurechipModel(value: string): DeviceInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceInfoResponse): DeviceInfoResponse.AsObject;
  static serializeBinaryToWriter(message: DeviceInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceInfoResponse;
  static deserializeBinaryFromReader(message: DeviceInfoResponse, reader: jspb.BinaryReader): DeviceInfoResponse;
}

export namespace DeviceInfoResponse {
  export type AsObject = {
    name: string,
    initialized: boolean,
    version: string,
    mnemonicPassphraseEnabled: boolean,
    monotonicIncrementsRemaining: number,
    securechipModel: string,
  }
}

export class InsertRemoveSDCardRequest extends jspb.Message {
  getAction(): InsertRemoveSDCardRequest.SDCardAction;
  setAction(value: InsertRemoveSDCardRequest.SDCardAction): InsertRemoveSDCardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsertRemoveSDCardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InsertRemoveSDCardRequest): InsertRemoveSDCardRequest.AsObject;
  static serializeBinaryToWriter(message: InsertRemoveSDCardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InsertRemoveSDCardRequest;
  static deserializeBinaryFromReader(message: InsertRemoveSDCardRequest, reader: jspb.BinaryReader): InsertRemoveSDCardRequest;
}

export namespace InsertRemoveSDCardRequest {
  export type AsObject = {
    action: InsertRemoveSDCardRequest.SDCardAction,
  }

  export enum SDCardAction { 
    REMOVE_CARD = 0,
    INSERT_CARD = 1,
  }
}

export class ResetRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetRequest): ResetRequest.AsObject;
  static serializeBinaryToWriter(message: ResetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetRequest;
  static deserializeBinaryFromReader(message: ResetRequest, reader: jspb.BinaryReader): ResetRequest;
}

export namespace ResetRequest {
  export type AsObject = {
  }
}

export class SetDeviceLanguageRequest extends jspb.Message {
  getLanguage(): string;
  setLanguage(value: string): SetDeviceLanguageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDeviceLanguageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetDeviceLanguageRequest): SetDeviceLanguageRequest.AsObject;
  static serializeBinaryToWriter(message: SetDeviceLanguageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDeviceLanguageRequest;
  static deserializeBinaryFromReader(message: SetDeviceLanguageRequest, reader: jspb.BinaryReader): SetDeviceLanguageRequest;
}

export namespace SetDeviceLanguageRequest {
  export type AsObject = {
    language: string,
  }
}

export class SetDeviceNameRequest extends jspb.Message {
  getName(): string;
  setName(value: string): SetDeviceNameRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDeviceNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetDeviceNameRequest): SetDeviceNameRequest.AsObject;
  static serializeBinaryToWriter(message: SetDeviceNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDeviceNameRequest;
  static deserializeBinaryFromReader(message: SetDeviceNameRequest, reader: jspb.BinaryReader): SetDeviceNameRequest;
}

export namespace SetDeviceNameRequest {
  export type AsObject = {
    name: string,
  }
}

export class SetPasswordRequest extends jspb.Message {
  getEntropy(): Uint8Array | string;
  getEntropy_asU8(): Uint8Array;
  getEntropy_asB64(): string;
  setEntropy(value: Uint8Array | string): SetPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetPasswordRequest): SetPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: SetPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPasswordRequest;
  static deserializeBinaryFromReader(message: SetPasswordRequest, reader: jspb.BinaryReader): SetPasswordRequest;
}

export namespace SetPasswordRequest {
  export type AsObject = {
    entropy: Uint8Array | string,
  }
}

