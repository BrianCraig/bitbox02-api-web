import * as jspb from 'google-protobuf'

import * as common_pb from './common_pb';
import * as antiklepto_pb from './antiklepto_pb';


export class ETHPubRequest extends jspb.Message {
  getKeypathList(): Array<number>;
  setKeypathList(value: Array<number>): ETHPubRequest;
  clearKeypathList(): ETHPubRequest;
  addKeypath(value: number, index?: number): ETHPubRequest;

  getCoin(): ETHCoin;
  setCoin(value: ETHCoin): ETHPubRequest;

  getOutputType(): ETHPubRequest.OutputType;
  setOutputType(value: ETHPubRequest.OutputType): ETHPubRequest;

  getDisplay(): boolean;
  setDisplay(value: boolean): ETHPubRequest;

  getContractAddress(): Uint8Array | string;
  getContractAddress_asU8(): Uint8Array;
  getContractAddress_asB64(): string;
  setContractAddress(value: Uint8Array | string): ETHPubRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ETHPubRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ETHPubRequest): ETHPubRequest.AsObject;
  static serializeBinaryToWriter(message: ETHPubRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ETHPubRequest;
  static deserializeBinaryFromReader(message: ETHPubRequest, reader: jspb.BinaryReader): ETHPubRequest;
}

export namespace ETHPubRequest {
  export type AsObject = {
    keypathList: Array<number>,
    coin: ETHCoin,
    outputType: ETHPubRequest.OutputType,
    display: boolean,
    contractAddress: Uint8Array | string,
  }

  export enum OutputType { 
    ADDRESS = 0,
    XPUB = 1,
  }
}

export class ETHSignRequest extends jspb.Message {
  getCoin(): ETHCoin;
  setCoin(value: ETHCoin): ETHSignRequest;

  getKeypathList(): Array<number>;
  setKeypathList(value: Array<number>): ETHSignRequest;
  clearKeypathList(): ETHSignRequest;
  addKeypath(value: number, index?: number): ETHSignRequest;

  getNonce(): Uint8Array | string;
  getNonce_asU8(): Uint8Array;
  getNonce_asB64(): string;
  setNonce(value: Uint8Array | string): ETHSignRequest;

  getGasPrice(): Uint8Array | string;
  getGasPrice_asU8(): Uint8Array;
  getGasPrice_asB64(): string;
  setGasPrice(value: Uint8Array | string): ETHSignRequest;

  getGasLimit(): Uint8Array | string;
  getGasLimit_asU8(): Uint8Array;
  getGasLimit_asB64(): string;
  setGasLimit(value: Uint8Array | string): ETHSignRequest;

  getRecipient(): Uint8Array | string;
  getRecipient_asU8(): Uint8Array;
  getRecipient_asB64(): string;
  setRecipient(value: Uint8Array | string): ETHSignRequest;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): ETHSignRequest;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): ETHSignRequest;

  getHostNonceCommitment(): antiklepto_pb.AntiKleptoHostNonceCommitment | undefined;
  setHostNonceCommitment(value?: antiklepto_pb.AntiKleptoHostNonceCommitment): ETHSignRequest;
  hasHostNonceCommitment(): boolean;
  clearHostNonceCommitment(): ETHSignRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ETHSignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ETHSignRequest): ETHSignRequest.AsObject;
  static serializeBinaryToWriter(message: ETHSignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ETHSignRequest;
  static deserializeBinaryFromReader(message: ETHSignRequest, reader: jspb.BinaryReader): ETHSignRequest;
}

export namespace ETHSignRequest {
  export type AsObject = {
    coin: ETHCoin,
    keypathList: Array<number>,
    nonce: Uint8Array | string,
    gasPrice: Uint8Array | string,
    gasLimit: Uint8Array | string,
    recipient: Uint8Array | string,
    value: Uint8Array | string,
    data: Uint8Array | string,
    hostNonceCommitment?: antiklepto_pb.AntiKleptoHostNonceCommitment.AsObject,
  }
}

export class ETHSignMessageRequest extends jspb.Message {
  getCoin(): ETHCoin;
  setCoin(value: ETHCoin): ETHSignMessageRequest;

  getKeypathList(): Array<number>;
  setKeypathList(value: Array<number>): ETHSignMessageRequest;
  clearKeypathList(): ETHSignMessageRequest;
  addKeypath(value: number, index?: number): ETHSignMessageRequest;

  getMsg(): Uint8Array | string;
  getMsg_asU8(): Uint8Array;
  getMsg_asB64(): string;
  setMsg(value: Uint8Array | string): ETHSignMessageRequest;

  getHostNonceCommitment(): antiklepto_pb.AntiKleptoHostNonceCommitment | undefined;
  setHostNonceCommitment(value?: antiklepto_pb.AntiKleptoHostNonceCommitment): ETHSignMessageRequest;
  hasHostNonceCommitment(): boolean;
  clearHostNonceCommitment(): ETHSignMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ETHSignMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ETHSignMessageRequest): ETHSignMessageRequest.AsObject;
  static serializeBinaryToWriter(message: ETHSignMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ETHSignMessageRequest;
  static deserializeBinaryFromReader(message: ETHSignMessageRequest, reader: jspb.BinaryReader): ETHSignMessageRequest;
}

export namespace ETHSignMessageRequest {
  export type AsObject = {
    coin: ETHCoin,
    keypathList: Array<number>,
    msg: Uint8Array | string,
    hostNonceCommitment?: antiklepto_pb.AntiKleptoHostNonceCommitment.AsObject,
  }
}

export class ETHSignResponse extends jspb.Message {
  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): ETHSignResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ETHSignResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ETHSignResponse): ETHSignResponse.AsObject;
  static serializeBinaryToWriter(message: ETHSignResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ETHSignResponse;
  static deserializeBinaryFromReader(message: ETHSignResponse, reader: jspb.BinaryReader): ETHSignResponse;
}

export namespace ETHSignResponse {
  export type AsObject = {
    signature: Uint8Array | string,
  }
}

export class ETHRequest extends jspb.Message {
  getPub(): ETHPubRequest | undefined;
  setPub(value?: ETHPubRequest): ETHRequest;
  hasPub(): boolean;
  clearPub(): ETHRequest;

  getSign(): ETHSignRequest | undefined;
  setSign(value?: ETHSignRequest): ETHRequest;
  hasSign(): boolean;
  clearSign(): ETHRequest;

  getSignMsg(): ETHSignMessageRequest | undefined;
  setSignMsg(value?: ETHSignMessageRequest): ETHRequest;
  hasSignMsg(): boolean;
  clearSignMsg(): ETHRequest;

  getAntikleptoSignature(): antiklepto_pb.AntiKleptoSignatureRequest | undefined;
  setAntikleptoSignature(value?: antiklepto_pb.AntiKleptoSignatureRequest): ETHRequest;
  hasAntikleptoSignature(): boolean;
  clearAntikleptoSignature(): ETHRequest;

  getRequestCase(): ETHRequest.RequestCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ETHRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ETHRequest): ETHRequest.AsObject;
  static serializeBinaryToWriter(message: ETHRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ETHRequest;
  static deserializeBinaryFromReader(message: ETHRequest, reader: jspb.BinaryReader): ETHRequest;
}

export namespace ETHRequest {
  export type AsObject = {
    pub?: ETHPubRequest.AsObject,
    sign?: ETHSignRequest.AsObject,
    signMsg?: ETHSignMessageRequest.AsObject,
    antikleptoSignature?: antiklepto_pb.AntiKleptoSignatureRequest.AsObject,
  }

  export enum RequestCase { 
    REQUEST_NOT_SET = 0,
    PUB = 1,
    SIGN = 2,
    SIGN_MSG = 3,
    ANTIKLEPTO_SIGNATURE = 4,
  }
}

export class ETHResponse extends jspb.Message {
  getPub(): common_pb.PubResponse | undefined;
  setPub(value?: common_pb.PubResponse): ETHResponse;
  hasPub(): boolean;
  clearPub(): ETHResponse;

  getSign(): ETHSignResponse | undefined;
  setSign(value?: ETHSignResponse): ETHResponse;
  hasSign(): boolean;
  clearSign(): ETHResponse;

  getAntikleptoSignerCommitment(): antiklepto_pb.AntiKleptoSignerCommitment | undefined;
  setAntikleptoSignerCommitment(value?: antiklepto_pb.AntiKleptoSignerCommitment): ETHResponse;
  hasAntikleptoSignerCommitment(): boolean;
  clearAntikleptoSignerCommitment(): ETHResponse;

  getResponseCase(): ETHResponse.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ETHResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ETHResponse): ETHResponse.AsObject;
  static serializeBinaryToWriter(message: ETHResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ETHResponse;
  static deserializeBinaryFromReader(message: ETHResponse, reader: jspb.BinaryReader): ETHResponse;
}

export namespace ETHResponse {
  export type AsObject = {
    pub?: common_pb.PubResponse.AsObject,
    sign?: ETHSignResponse.AsObject,
    antikleptoSignerCommitment?: antiklepto_pb.AntiKleptoSignerCommitment.AsObject,
  }

  export enum ResponseCase { 
    RESPONSE_NOT_SET = 0,
    PUB = 1,
    SIGN = 2,
    ANTIKLEPTO_SIGNER_COMMITMENT = 3,
  }
}

export enum ETHCoin { 
  ETH = 0,
  ROPSTENETH = 1,
  RINKEBYETH = 2,
}
