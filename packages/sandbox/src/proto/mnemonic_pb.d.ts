import * as jspb from 'google-protobuf'



export class ShowMnemonicRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShowMnemonicRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShowMnemonicRequest): ShowMnemonicRequest.AsObject;
  static serializeBinaryToWriter(message: ShowMnemonicRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShowMnemonicRequest;
  static deserializeBinaryFromReader(message: ShowMnemonicRequest, reader: jspb.BinaryReader): ShowMnemonicRequest;
}

export namespace ShowMnemonicRequest {
  export type AsObject = {
  }
}

export class RestoreFromMnemonicRequest extends jspb.Message {
  getTimestamp(): number;
  setTimestamp(value: number): RestoreFromMnemonicRequest;

  getTimezoneOffset(): number;
  setTimezoneOffset(value: number): RestoreFromMnemonicRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreFromMnemonicRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreFromMnemonicRequest): RestoreFromMnemonicRequest.AsObject;
  static serializeBinaryToWriter(message: RestoreFromMnemonicRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreFromMnemonicRequest;
  static deserializeBinaryFromReader(message: RestoreFromMnemonicRequest, reader: jspb.BinaryReader): RestoreFromMnemonicRequest;
}

export namespace RestoreFromMnemonicRequest {
  export type AsObject = {
    timestamp: number,
    timezoneOffset: number,
  }
}

export class SetMnemonicPassphraseEnabledRequest extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): SetMnemonicPassphraseEnabledRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetMnemonicPassphraseEnabledRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetMnemonicPassphraseEnabledRequest): SetMnemonicPassphraseEnabledRequest.AsObject;
  static serializeBinaryToWriter(message: SetMnemonicPassphraseEnabledRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetMnemonicPassphraseEnabledRequest;
  static deserializeBinaryFromReader(message: SetMnemonicPassphraseEnabledRequest, reader: jspb.BinaryReader): SetMnemonicPassphraseEnabledRequest;
}

export namespace SetMnemonicPassphraseEnabledRequest {
  export type AsObject = {
    enabled: boolean,
  }
}

