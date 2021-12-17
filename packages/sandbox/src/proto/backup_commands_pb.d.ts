import * as jspb from 'google-protobuf'



export class CheckBackupRequest extends jspb.Message {
  getSilent(): boolean;
  setSilent(value: boolean): CheckBackupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckBackupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckBackupRequest): CheckBackupRequest.AsObject;
  static serializeBinaryToWriter(message: CheckBackupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckBackupRequest;
  static deserializeBinaryFromReader(message: CheckBackupRequest, reader: jspb.BinaryReader): CheckBackupRequest;
}

export namespace CheckBackupRequest {
  export type AsObject = {
    silent: boolean,
  }
}

export class CheckBackupResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CheckBackupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckBackupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckBackupResponse): CheckBackupResponse.AsObject;
  static serializeBinaryToWriter(message: CheckBackupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckBackupResponse;
  static deserializeBinaryFromReader(message: CheckBackupResponse, reader: jspb.BinaryReader): CheckBackupResponse;
}

export namespace CheckBackupResponse {
  export type AsObject = {
    id: string,
  }
}

export class CreateBackupRequest extends jspb.Message {
  getTimestamp(): number;
  setTimestamp(value: number): CreateBackupRequest;

  getTimezoneOffset(): number;
  setTimezoneOffset(value: number): CreateBackupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBackupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBackupRequest): CreateBackupRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBackupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBackupRequest;
  static deserializeBinaryFromReader(message: CreateBackupRequest, reader: jspb.BinaryReader): CreateBackupRequest;
}

export namespace CreateBackupRequest {
  export type AsObject = {
    timestamp: number,
    timezoneOffset: number,
  }
}

export class ListBackupsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBackupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBackupsRequest): ListBackupsRequest.AsObject;
  static serializeBinaryToWriter(message: ListBackupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBackupsRequest;
  static deserializeBinaryFromReader(message: ListBackupsRequest, reader: jspb.BinaryReader): ListBackupsRequest;
}

export namespace ListBackupsRequest {
  export type AsObject = {
  }
}

export class BackupInfo extends jspb.Message {
  getId(): string;
  setId(value: string): BackupInfo;

  getTimestamp(): number;
  setTimestamp(value: number): BackupInfo;

  getName(): string;
  setName(value: string): BackupInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackupInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BackupInfo): BackupInfo.AsObject;
  static serializeBinaryToWriter(message: BackupInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackupInfo;
  static deserializeBinaryFromReader(message: BackupInfo, reader: jspb.BinaryReader): BackupInfo;
}

export namespace BackupInfo {
  export type AsObject = {
    id: string,
    timestamp: number,
    name: string,
  }
}

export class ListBackupsResponse extends jspb.Message {
  getInfoList(): Array<BackupInfo>;
  setInfoList(value: Array<BackupInfo>): ListBackupsResponse;
  clearInfoList(): ListBackupsResponse;
  addInfo(value?: BackupInfo, index?: number): BackupInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBackupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBackupsResponse): ListBackupsResponse.AsObject;
  static serializeBinaryToWriter(message: ListBackupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBackupsResponse;
  static deserializeBinaryFromReader(message: ListBackupsResponse, reader: jspb.BinaryReader): ListBackupsResponse;
}

export namespace ListBackupsResponse {
  export type AsObject = {
    infoList: Array<BackupInfo.AsObject>,
  }
}

export class RestoreBackupRequest extends jspb.Message {
  getId(): string;
  setId(value: string): RestoreBackupRequest;

  getTimestamp(): number;
  setTimestamp(value: number): RestoreBackupRequest;

  getTimezoneOffset(): number;
  setTimezoneOffset(value: number): RestoreBackupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreBackupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreBackupRequest): RestoreBackupRequest.AsObject;
  static serializeBinaryToWriter(message: RestoreBackupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreBackupRequest;
  static deserializeBinaryFromReader(message: RestoreBackupRequest, reader: jspb.BinaryReader): RestoreBackupRequest;
}

export namespace RestoreBackupRequest {
  export type AsObject = {
    id: string,
    timestamp: number,
    timezoneOffset: number,
  }
}

