import * as jspb from 'google-protobuf'



export class PerformAttestationRequest extends jspb.Message {
  getChallenge(): Uint8Array | string;
  getChallenge_asU8(): Uint8Array;
  getChallenge_asB64(): string;
  setChallenge(value: Uint8Array | string): PerformAttestationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PerformAttestationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PerformAttestationRequest): PerformAttestationRequest.AsObject;
  static serializeBinaryToWriter(message: PerformAttestationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PerformAttestationRequest;
  static deserializeBinaryFromReader(message: PerformAttestationRequest, reader: jspb.BinaryReader): PerformAttestationRequest;
}

export namespace PerformAttestationRequest {
  export type AsObject = {
    challenge: Uint8Array | string,
  }
}

export class PerformAttestationResponse extends jspb.Message {
  getBootloaderHash(): Uint8Array | string;
  getBootloaderHash_asU8(): Uint8Array;
  getBootloaderHash_asB64(): string;
  setBootloaderHash(value: Uint8Array | string): PerformAttestationResponse;

  getDevicePubkey(): Uint8Array | string;
  getDevicePubkey_asU8(): Uint8Array;
  getDevicePubkey_asB64(): string;
  setDevicePubkey(value: Uint8Array | string): PerformAttestationResponse;

  getCertificate(): Uint8Array | string;
  getCertificate_asU8(): Uint8Array;
  getCertificate_asB64(): string;
  setCertificate(value: Uint8Array | string): PerformAttestationResponse;

  getRootPubkeyIdentifier(): Uint8Array | string;
  getRootPubkeyIdentifier_asU8(): Uint8Array;
  getRootPubkeyIdentifier_asB64(): string;
  setRootPubkeyIdentifier(value: Uint8Array | string): PerformAttestationResponse;

  getChallengeSignature(): Uint8Array | string;
  getChallengeSignature_asU8(): Uint8Array;
  getChallengeSignature_asB64(): string;
  setChallengeSignature(value: Uint8Array | string): PerformAttestationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PerformAttestationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PerformAttestationResponse): PerformAttestationResponse.AsObject;
  static serializeBinaryToWriter(message: PerformAttestationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PerformAttestationResponse;
  static deserializeBinaryFromReader(message: PerformAttestationResponse, reader: jspb.BinaryReader): PerformAttestationResponse;
}

export namespace PerformAttestationResponse {
  export type AsObject = {
    bootloaderHash: Uint8Array | string,
    devicePubkey: Uint8Array | string,
    certificate: Uint8Array | string,
    rootPubkeyIdentifier: Uint8Array | string,
    challengeSignature: Uint8Array | string,
  }
}

