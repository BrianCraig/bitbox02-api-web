import * as jspb from 'google-protobuf'

import * as common_pb from './common_pb';
import * as antiklepto_pb from './antiklepto_pb';


export class BTCScriptConfig extends jspb.Message {
  getSimpleType(): BTCScriptConfig.SimpleType;
  setSimpleType(value: BTCScriptConfig.SimpleType): BTCScriptConfig;

  getMultisig(): BTCScriptConfig.Multisig | undefined;
  setMultisig(value?: BTCScriptConfig.Multisig): BTCScriptConfig;
  hasMultisig(): boolean;
  clearMultisig(): BTCScriptConfig;

  getConfigCase(): BTCScriptConfig.ConfigCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTCScriptConfig.AsObject;
  static toObject(includeInstance: boolean, msg: BTCScriptConfig): BTCScriptConfig.AsObject;
  static serializeBinaryToWriter(message: BTCScriptConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTCScriptConfig;
  static deserializeBinaryFromReader(message: BTCScriptConfig, reader: jspb.BinaryReader): BTCScriptConfig;
}

export namespace BTCScriptConfig {
  export type AsObject = {
    simpleType: BTCScriptConfig.SimpleType,
    multisig?: BTCScriptConfig.Multisig.AsObject,
  }

  export class Multisig extends jspb.Message {
    getThreshold(): number;
    setThreshold(value: number): Multisig;

    getXpubsList(): Array<common_pb.XPub>;
    setXpubsList(value: Array<common_pb.XPub>): Multisig;
    clearXpubsList(): Multisig;
    addXpubs(value?: common_pb.XPub, index?: number): common_pb.XPub;

    getOurXpubIndex(): number;
    setOurXpubIndex(value: number): Multisig;

    getScriptType(): BTCScriptConfig.Multisig.ScriptType;
    setScriptType(value: BTCScriptConfig.Multisig.ScriptType): Multisig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Multisig.AsObject;
    static toObject(includeInstance: boolean, msg: Multisig): Multisig.AsObject;
    static serializeBinaryToWriter(message: Multisig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Multisig;
    static deserializeBinaryFromReader(message: Multisig, reader: jspb.BinaryReader): Multisig;
  }

  export namespace Multisig {
    export type AsObject = {
      threshold: number,
      xpubsList: Array<common_pb.XPub.AsObject>,
      ourXpubIndex: number,
      scriptType: BTCScriptConfig.Multisig.ScriptType,
    }

    export enum ScriptType { 
      P2WSH = 0,
      P2WSH_P2SH = 1,
    }
  }


  export enum SimpleType { 
    P2WPKH_P2SH = 0,
    P2WPKH = 1,
  }

  export enum ConfigCase { 
    CONFIG_NOT_SET = 0,
    SIMPLE_TYPE = 1,
    MULTISIG = 2,
  }
}

export class BTCPubRequest extends jspb.Message {
  getCoin(): BTCCoin;
  setCoin(value: BTCCoin): BTCPubRequest;

  getKeypathList(): Array<number>;
  setKeypathList(value: Array<number>): BTCPubRequest;
  clearKeypathList(): BTCPubRequest;
  addKeypath(value: number, index?: number): BTCPubRequest;

  getXpubType(): BTCPubRequest.XPubType;
  setXpubType(value: BTCPubRequest.XPubType): BTCPubRequest;

  getScriptConfig(): BTCScriptConfig | undefined;
  setScriptConfig(value?: BTCScriptConfig): BTCPubRequest;
  hasScriptConfig(): boolean;
  clearScriptConfig(): BTCPubRequest;

  getDisplay(): boolean;
  setDisplay(value: boolean): BTCPubRequest;

  getOutputCase(): BTCPubRequest.OutputCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTCPubRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BTCPubRequest): BTCPubRequest.AsObject;
  static serializeBinaryToWriter(message: BTCPubRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTCPubRequest;
  static deserializeBinaryFromReader(message: BTCPubRequest, reader: jspb.BinaryReader): BTCPubRequest;
}

export namespace BTCPubRequest {
  export type AsObject = {
    coin: BTCCoin,
    keypathList: Array<number>,
    xpubType: BTCPubRequest.XPubType,
    scriptConfig?: BTCScriptConfig.AsObject,
    display: boolean,
  }

  export enum XPubType { 
    TPUB = 0,
    XPUB = 1,
    YPUB = 2,
    ZPUB = 3,
    VPUB = 4,
    UPUB = 5,
    CAPITAL_VPUB = 6,
    CAPITAL_ZPUB = 7,
    CAPITAL_UPUB = 8,
    CAPITAL_YPUB = 9,
  }

  export enum OutputCase { 
    OUTPUT_NOT_SET = 0,
    XPUB_TYPE = 3,
    SCRIPT_CONFIG = 4,
  }
}

export class BTCScriptConfigWithKeypath extends jspb.Message {
  getScriptConfig(): BTCScriptConfig | undefined;
  setScriptConfig(value?: BTCScriptConfig): BTCScriptConfigWithKeypath;
  hasScriptConfig(): boolean;
  clearScriptConfig(): BTCScriptConfigWithKeypath;

  getKeypathList(): Array<number>;
  setKeypathList(value: Array<number>): BTCScriptConfigWithKeypath;
  clearKeypathList(): BTCScriptConfigWithKeypath;
  addKeypath(value: number, index?: number): BTCScriptConfigWithKeypath;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTCScriptConfigWithKeypath.AsObject;
  static toObject(includeInstance: boolean, msg: BTCScriptConfigWithKeypath): BTCScriptConfigWithKeypath.AsObject;
  static serializeBinaryToWriter(message: BTCScriptConfigWithKeypath, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTCScriptConfigWithKeypath;
  static deserializeBinaryFromReader(message: BTCScriptConfigWithKeypath, reader: jspb.BinaryReader): BTCScriptConfigWithKeypath;
}

export namespace BTCScriptConfigWithKeypath {
  export type AsObject = {
    scriptConfig?: BTCScriptConfig.AsObject,
    keypathList: Array<number>,
  }
}

export class BTCSignInitRequest extends jspb.Message {
  getCoin(): BTCCoin;
  setCoin(value: BTCCoin): BTCSignInitRequest;

  getScriptConfigsList(): Array<BTCScriptConfigWithKeypath>;
  setScriptConfigsList(value: Array<BTCScriptConfigWithKeypath>): BTCSignInitRequest;
  clearScriptConfigsList(): BTCSignInitRequest;
  addScriptConfigs(value?: BTCScriptConfigWithKeypath, index?: number): BTCScriptConfigWithKeypath;

  getVersion(): number;
  setVersion(value: number): BTCSignInitRequest;

  getNumInputs(): number;
  setNumInputs(value: number): BTCSignInitRequest;

  getNumOutputs(): number;
  setNumOutputs(value: number): BTCSignInitRequest;

  getLocktime(): number;
  setLocktime(value: number): BTCSignInitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTCSignInitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BTCSignInitRequest): BTCSignInitRequest.AsObject;
  static serializeBinaryToWriter(message: BTCSignInitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTCSignInitRequest;
  static deserializeBinaryFromReader(message: BTCSignInitRequest, reader: jspb.BinaryReader): BTCSignInitRequest;
}

export namespace BTCSignInitRequest {
  export type AsObject = {
    coin: BTCCoin,
    scriptConfigsList: Array<BTCScriptConfigWithKeypath.AsObject>,
    version: number,
    numInputs: number,
    numOutputs: number,
    locktime: number,
  }
}

export class BTCSignNextResponse extends jspb.Message {
  getType(): BTCSignNextResponse.Type;
  setType(value: BTCSignNextResponse.Type): BTCSignNextResponse;

  getIndex(): number;
  setIndex(value: number): BTCSignNextResponse;

  getHasSignature(): boolean;
  setHasSignature(value: boolean): BTCSignNextResponse;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): BTCSignNextResponse;

  getPrevIndex(): number;
  setPrevIndex(value: number): BTCSignNextResponse;

  getAntiKleptoSignerCommitment(): antiklepto_pb.AntiKleptoSignerCommitment | undefined;
  setAntiKleptoSignerCommitment(value?: antiklepto_pb.AntiKleptoSignerCommitment): BTCSignNextResponse;
  hasAntiKleptoSignerCommitment(): boolean;
  clearAntiKleptoSignerCommitment(): BTCSignNextResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTCSignNextResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BTCSignNextResponse): BTCSignNextResponse.AsObject;
  static serializeBinaryToWriter(message: BTCSignNextResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTCSignNextResponse;
  static deserializeBinaryFromReader(message: BTCSignNextResponse, reader: jspb.BinaryReader): BTCSignNextResponse;
}

export namespace BTCSignNextResponse {
  export type AsObject = {
    type: BTCSignNextResponse.Type,
    index: number,
    hasSignature: boolean,
    signature: Uint8Array | string,
    prevIndex: number,
    antiKleptoSignerCommitment?: antiklepto_pb.AntiKleptoSignerCommitment.AsObject,
  }

  export enum Type { 
    INPUT = 0,
    OUTPUT = 1,
    DONE = 2,
    PREVTX_INIT = 3,
    PREVTX_INPUT = 4,
    PREVTX_OUTPUT = 5,
    HOST_NONCE = 6,
  }
}

export class BTCSignInputRequest extends jspb.Message {
  getPrevouthash(): Uint8Array | string;
  getPrevouthash_asU8(): Uint8Array;
  getPrevouthash_asB64(): string;
  setPrevouthash(value: Uint8Array | string): BTCSignInputRequest;

  getPrevoutindex(): number;
  setPrevoutindex(value: number): BTCSignInputRequest;

  getPrevoutvalue(): number;
  setPrevoutvalue(value: number): BTCSignInputRequest;

  getSequence(): number;
  setSequence(value: number): BTCSignInputRequest;

  getKeypathList(): Array<number>;
  setKeypathList(value: Array<number>): BTCSignInputRequest;
  clearKeypathList(): BTCSignInputRequest;
  addKeypath(value: number, index?: number): BTCSignInputRequest;

  getScriptConfigIndex(): number;
  setScriptConfigIndex(value: number): BTCSignInputRequest;

  getHostNonceCommitment(): antiklepto_pb.AntiKleptoHostNonceCommitment | undefined;
  setHostNonceCommitment(value?: antiklepto_pb.AntiKleptoHostNonceCommitment): BTCSignInputRequest;
  hasHostNonceCommitment(): boolean;
  clearHostNonceCommitment(): BTCSignInputRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTCSignInputRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BTCSignInputRequest): BTCSignInputRequest.AsObject;
  static serializeBinaryToWriter(message: BTCSignInputRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTCSignInputRequest;
  static deserializeBinaryFromReader(message: BTCSignInputRequest, reader: jspb.BinaryReader): BTCSignInputRequest;
}

export namespace BTCSignInputRequest {
  export type AsObject = {
    prevouthash: Uint8Array | string,
    prevoutindex: number,
    prevoutvalue: number,
    sequence: number,
    keypathList: Array<number>,
    scriptConfigIndex: number,
    hostNonceCommitment?: antiklepto_pb.AntiKleptoHostNonceCommitment.AsObject,
  }
}

export class BTCSignOutputRequest extends jspb.Message {
  getOurs(): boolean;
  setOurs(value: boolean): BTCSignOutputRequest;

  getType(): BTCOutputType;
  setType(value: BTCOutputType): BTCSignOutputRequest;

  getValue(): number;
  setValue(value: number): BTCSignOutputRequest;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): BTCSignOutputRequest;

  getKeypathList(): Array<number>;
  setKeypathList(value: Array<number>): BTCSignOutputRequest;
  clearKeypathList(): BTCSignOutputRequest;
  addKeypath(value: number, index?: number): BTCSignOutputRequest;

  getScriptConfigIndex(): number;
  setScriptConfigIndex(value: number): BTCSignOutputRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTCSignOutputRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BTCSignOutputRequest): BTCSignOutputRequest.AsObject;
  static serializeBinaryToWriter(message: BTCSignOutputRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTCSignOutputRequest;
  static deserializeBinaryFromReader(message: BTCSignOutputRequest, reader: jspb.BinaryReader): BTCSignOutputRequest;
}

export namespace BTCSignOutputRequest {
  export type AsObject = {
    ours: boolean,
    type: BTCOutputType,
    value: number,
    hash: Uint8Array | string,
    keypathList: Array<number>,
    scriptConfigIndex: number,
  }
}

export class BTCScriptConfigRegistration extends jspb.Message {
  getCoin(): BTCCoin;
  setCoin(value: BTCCoin): BTCScriptConfigRegistration;

  getScriptConfig(): BTCScriptConfig | undefined;
  setScriptConfig(value?: BTCScriptConfig): BTCScriptConfigRegistration;
  hasScriptConfig(): boolean;
  clearScriptConfig(): BTCScriptConfigRegistration;

  getKeypathList(): Array<number>;
  setKeypathList(value: Array<number>): BTCScriptConfigRegistration;
  clearKeypathList(): BTCScriptConfigRegistration;
  addKeypath(value: number, index?: number): BTCScriptConfigRegistration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTCScriptConfigRegistration.AsObject;
  static toObject(includeInstance: boolean, msg: BTCScriptConfigRegistration): BTCScriptConfigRegistration.AsObject;
  static serializeBinaryToWriter(message: BTCScriptConfigRegistration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTCScriptConfigRegistration;
  static deserializeBinaryFromReader(message: BTCScriptConfigRegistration, reader: jspb.BinaryReader): BTCScriptConfigRegistration;
}

export namespace BTCScriptConfigRegistration {
  export type AsObject = {
    coin: BTCCoin,
    scriptConfig?: BTCScriptConfig.AsObject,
    keypathList: Array<number>,
  }
}

export class BTCSuccess extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTCSuccess.AsObject;
  static toObject(includeInstance: boolean, msg: BTCSuccess): BTCSuccess.AsObject;
  static serializeBinaryToWriter(message: BTCSuccess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTCSuccess;
  static deserializeBinaryFromReader(message: BTCSuccess, reader: jspb.BinaryReader): BTCSuccess;
}

export namespace BTCSuccess {
  export type AsObject = {
  }
}

export class BTCIsScriptConfigRegisteredRequest extends jspb.Message {
  getRegistration(): BTCScriptConfigRegistration | undefined;
  setRegistration(value?: BTCScriptConfigRegistration): BTCIsScriptConfigRegisteredRequest;
  hasRegistration(): boolean;
  clearRegistration(): BTCIsScriptConfigRegisteredRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTCIsScriptConfigRegisteredRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BTCIsScriptConfigRegisteredRequest): BTCIsScriptConfigRegisteredRequest.AsObject;
  static serializeBinaryToWriter(message: BTCIsScriptConfigRegisteredRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTCIsScriptConfigRegisteredRequest;
  static deserializeBinaryFromReader(message: BTCIsScriptConfigRegisteredRequest, reader: jspb.BinaryReader): BTCIsScriptConfigRegisteredRequest;
}

export namespace BTCIsScriptConfigRegisteredRequest {
  export type AsObject = {
    registration?: BTCScriptConfigRegistration.AsObject,
  }
}

export class BTCIsScriptConfigRegisteredResponse extends jspb.Message {
  getIsRegistered(): boolean;
  setIsRegistered(value: boolean): BTCIsScriptConfigRegisteredResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTCIsScriptConfigRegisteredResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BTCIsScriptConfigRegisteredResponse): BTCIsScriptConfigRegisteredResponse.AsObject;
  static serializeBinaryToWriter(message: BTCIsScriptConfigRegisteredResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTCIsScriptConfigRegisteredResponse;
  static deserializeBinaryFromReader(message: BTCIsScriptConfigRegisteredResponse, reader: jspb.BinaryReader): BTCIsScriptConfigRegisteredResponse;
}

export namespace BTCIsScriptConfigRegisteredResponse {
  export type AsObject = {
    isRegistered: boolean,
  }
}

export class BTCRegisterScriptConfigRequest extends jspb.Message {
  getRegistration(): BTCScriptConfigRegistration | undefined;
  setRegistration(value?: BTCScriptConfigRegistration): BTCRegisterScriptConfigRequest;
  hasRegistration(): boolean;
  clearRegistration(): BTCRegisterScriptConfigRequest;

  getName(): string;
  setName(value: string): BTCRegisterScriptConfigRequest;

  getXpubType(): BTCRegisterScriptConfigRequest.XPubType;
  setXpubType(value: BTCRegisterScriptConfigRequest.XPubType): BTCRegisterScriptConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTCRegisterScriptConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BTCRegisterScriptConfigRequest): BTCRegisterScriptConfigRequest.AsObject;
  static serializeBinaryToWriter(message: BTCRegisterScriptConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTCRegisterScriptConfigRequest;
  static deserializeBinaryFromReader(message: BTCRegisterScriptConfigRequest, reader: jspb.BinaryReader): BTCRegisterScriptConfigRequest;
}

export namespace BTCRegisterScriptConfigRequest {
  export type AsObject = {
    registration?: BTCScriptConfigRegistration.AsObject,
    name: string,
    xpubType: BTCRegisterScriptConfigRequest.XPubType,
  }

  export enum XPubType { 
    AUTO_ELECTRUM = 0,
    AUTO_XPUB_TPUB = 1,
  }
}

export class BTCPrevTxInitRequest extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): BTCPrevTxInitRequest;

  getNumInputs(): number;
  setNumInputs(value: number): BTCPrevTxInitRequest;

  getNumOutputs(): number;
  setNumOutputs(value: number): BTCPrevTxInitRequest;

  getLocktime(): number;
  setLocktime(value: number): BTCPrevTxInitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTCPrevTxInitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BTCPrevTxInitRequest): BTCPrevTxInitRequest.AsObject;
  static serializeBinaryToWriter(message: BTCPrevTxInitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTCPrevTxInitRequest;
  static deserializeBinaryFromReader(message: BTCPrevTxInitRequest, reader: jspb.BinaryReader): BTCPrevTxInitRequest;
}

export namespace BTCPrevTxInitRequest {
  export type AsObject = {
    version: number,
    numInputs: number,
    numOutputs: number,
    locktime: number,
  }
}

export class BTCPrevTxInputRequest extends jspb.Message {
  getPrevOutHash(): Uint8Array | string;
  getPrevOutHash_asU8(): Uint8Array;
  getPrevOutHash_asB64(): string;
  setPrevOutHash(value: Uint8Array | string): BTCPrevTxInputRequest;

  getPrevOutIndex(): number;
  setPrevOutIndex(value: number): BTCPrevTxInputRequest;

  getSignatureScript(): Uint8Array | string;
  getSignatureScript_asU8(): Uint8Array;
  getSignatureScript_asB64(): string;
  setSignatureScript(value: Uint8Array | string): BTCPrevTxInputRequest;

  getSequence(): number;
  setSequence(value: number): BTCPrevTxInputRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTCPrevTxInputRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BTCPrevTxInputRequest): BTCPrevTxInputRequest.AsObject;
  static serializeBinaryToWriter(message: BTCPrevTxInputRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTCPrevTxInputRequest;
  static deserializeBinaryFromReader(message: BTCPrevTxInputRequest, reader: jspb.BinaryReader): BTCPrevTxInputRequest;
}

export namespace BTCPrevTxInputRequest {
  export type AsObject = {
    prevOutHash: Uint8Array | string,
    prevOutIndex: number,
    signatureScript: Uint8Array | string,
    sequence: number,
  }
}

export class BTCPrevTxOutputRequest extends jspb.Message {
  getValue(): number;
  setValue(value: number): BTCPrevTxOutputRequest;

  getPubkeyScript(): Uint8Array | string;
  getPubkeyScript_asU8(): Uint8Array;
  getPubkeyScript_asB64(): string;
  setPubkeyScript(value: Uint8Array | string): BTCPrevTxOutputRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTCPrevTxOutputRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BTCPrevTxOutputRequest): BTCPrevTxOutputRequest.AsObject;
  static serializeBinaryToWriter(message: BTCPrevTxOutputRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTCPrevTxOutputRequest;
  static deserializeBinaryFromReader(message: BTCPrevTxOutputRequest, reader: jspb.BinaryReader): BTCPrevTxOutputRequest;
}

export namespace BTCPrevTxOutputRequest {
  export type AsObject = {
    value: number,
    pubkeyScript: Uint8Array | string,
  }
}

export class BTCSignMessageRequest extends jspb.Message {
  getCoin(): BTCCoin;
  setCoin(value: BTCCoin): BTCSignMessageRequest;

  getScriptConfig(): BTCScriptConfigWithKeypath | undefined;
  setScriptConfig(value?: BTCScriptConfigWithKeypath): BTCSignMessageRequest;
  hasScriptConfig(): boolean;
  clearScriptConfig(): BTCSignMessageRequest;

  getMsg(): Uint8Array | string;
  getMsg_asU8(): Uint8Array;
  getMsg_asB64(): string;
  setMsg(value: Uint8Array | string): BTCSignMessageRequest;

  getHostNonceCommitment(): antiklepto_pb.AntiKleptoHostNonceCommitment | undefined;
  setHostNonceCommitment(value?: antiklepto_pb.AntiKleptoHostNonceCommitment): BTCSignMessageRequest;
  hasHostNonceCommitment(): boolean;
  clearHostNonceCommitment(): BTCSignMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTCSignMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BTCSignMessageRequest): BTCSignMessageRequest.AsObject;
  static serializeBinaryToWriter(message: BTCSignMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTCSignMessageRequest;
  static deserializeBinaryFromReader(message: BTCSignMessageRequest, reader: jspb.BinaryReader): BTCSignMessageRequest;
}

export namespace BTCSignMessageRequest {
  export type AsObject = {
    coin: BTCCoin,
    scriptConfig?: BTCScriptConfigWithKeypath.AsObject,
    msg: Uint8Array | string,
    hostNonceCommitment?: antiklepto_pb.AntiKleptoHostNonceCommitment.AsObject,
  }
}

export class BTCSignMessageResponse extends jspb.Message {
  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): BTCSignMessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTCSignMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BTCSignMessageResponse): BTCSignMessageResponse.AsObject;
  static serializeBinaryToWriter(message: BTCSignMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTCSignMessageResponse;
  static deserializeBinaryFromReader(message: BTCSignMessageResponse, reader: jspb.BinaryReader): BTCSignMessageResponse;
}

export namespace BTCSignMessageResponse {
  export type AsObject = {
    signature: Uint8Array | string,
  }
}

export class BTCRequest extends jspb.Message {
  getIsScriptConfigRegistered(): BTCIsScriptConfigRegisteredRequest | undefined;
  setIsScriptConfigRegistered(value?: BTCIsScriptConfigRegisteredRequest): BTCRequest;
  hasIsScriptConfigRegistered(): boolean;
  clearIsScriptConfigRegistered(): BTCRequest;

  getRegisterScriptConfig(): BTCRegisterScriptConfigRequest | undefined;
  setRegisterScriptConfig(value?: BTCRegisterScriptConfigRequest): BTCRequest;
  hasRegisterScriptConfig(): boolean;
  clearRegisterScriptConfig(): BTCRequest;

  getPrevtxInit(): BTCPrevTxInitRequest | undefined;
  setPrevtxInit(value?: BTCPrevTxInitRequest): BTCRequest;
  hasPrevtxInit(): boolean;
  clearPrevtxInit(): BTCRequest;

  getPrevtxInput(): BTCPrevTxInputRequest | undefined;
  setPrevtxInput(value?: BTCPrevTxInputRequest): BTCRequest;
  hasPrevtxInput(): boolean;
  clearPrevtxInput(): BTCRequest;

  getPrevtxOutput(): BTCPrevTxOutputRequest | undefined;
  setPrevtxOutput(value?: BTCPrevTxOutputRequest): BTCRequest;
  hasPrevtxOutput(): boolean;
  clearPrevtxOutput(): BTCRequest;

  getSignMessage(): BTCSignMessageRequest | undefined;
  setSignMessage(value?: BTCSignMessageRequest): BTCRequest;
  hasSignMessage(): boolean;
  clearSignMessage(): BTCRequest;

  getAntikleptoSignature(): antiklepto_pb.AntiKleptoSignatureRequest | undefined;
  setAntikleptoSignature(value?: antiklepto_pb.AntiKleptoSignatureRequest): BTCRequest;
  hasAntikleptoSignature(): boolean;
  clearAntikleptoSignature(): BTCRequest;

  getRequestCase(): BTCRequest.RequestCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTCRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BTCRequest): BTCRequest.AsObject;
  static serializeBinaryToWriter(message: BTCRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTCRequest;
  static deserializeBinaryFromReader(message: BTCRequest, reader: jspb.BinaryReader): BTCRequest;
}

export namespace BTCRequest {
  export type AsObject = {
    isScriptConfigRegistered?: BTCIsScriptConfigRegisteredRequest.AsObject,
    registerScriptConfig?: BTCRegisterScriptConfigRequest.AsObject,
    prevtxInit?: BTCPrevTxInitRequest.AsObject,
    prevtxInput?: BTCPrevTxInputRequest.AsObject,
    prevtxOutput?: BTCPrevTxOutputRequest.AsObject,
    signMessage?: BTCSignMessageRequest.AsObject,
    antikleptoSignature?: antiklepto_pb.AntiKleptoSignatureRequest.AsObject,
  }

  export enum RequestCase { 
    REQUEST_NOT_SET = 0,
    IS_SCRIPT_CONFIG_REGISTERED = 1,
    REGISTER_SCRIPT_CONFIG = 2,
    PREVTX_INIT = 3,
    PREVTX_INPUT = 4,
    PREVTX_OUTPUT = 5,
    SIGN_MESSAGE = 6,
    ANTIKLEPTO_SIGNATURE = 7,
  }
}

export class BTCResponse extends jspb.Message {
  getSuccess(): BTCSuccess | undefined;
  setSuccess(value?: BTCSuccess): BTCResponse;
  hasSuccess(): boolean;
  clearSuccess(): BTCResponse;

  getIsScriptConfigRegistered(): BTCIsScriptConfigRegisteredResponse | undefined;
  setIsScriptConfigRegistered(value?: BTCIsScriptConfigRegisteredResponse): BTCResponse;
  hasIsScriptConfigRegistered(): boolean;
  clearIsScriptConfigRegistered(): BTCResponse;

  getSignNext(): BTCSignNextResponse | undefined;
  setSignNext(value?: BTCSignNextResponse): BTCResponse;
  hasSignNext(): boolean;
  clearSignNext(): BTCResponse;

  getSignMessage(): BTCSignMessageResponse | undefined;
  setSignMessage(value?: BTCSignMessageResponse): BTCResponse;
  hasSignMessage(): boolean;
  clearSignMessage(): BTCResponse;

  getAntikleptoSignerCommitment(): antiklepto_pb.AntiKleptoSignerCommitment | undefined;
  setAntikleptoSignerCommitment(value?: antiklepto_pb.AntiKleptoSignerCommitment): BTCResponse;
  hasAntikleptoSignerCommitment(): boolean;
  clearAntikleptoSignerCommitment(): BTCResponse;

  getResponseCase(): BTCResponse.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTCResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BTCResponse): BTCResponse.AsObject;
  static serializeBinaryToWriter(message: BTCResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTCResponse;
  static deserializeBinaryFromReader(message: BTCResponse, reader: jspb.BinaryReader): BTCResponse;
}

export namespace BTCResponse {
  export type AsObject = {
    success?: BTCSuccess.AsObject,
    isScriptConfigRegistered?: BTCIsScriptConfigRegisteredResponse.AsObject,
    signNext?: BTCSignNextResponse.AsObject,
    signMessage?: BTCSignMessageResponse.AsObject,
    antikleptoSignerCommitment?: antiklepto_pb.AntiKleptoSignerCommitment.AsObject,
  }

  export enum ResponseCase { 
    RESPONSE_NOT_SET = 0,
    SUCCESS = 1,
    IS_SCRIPT_CONFIG_REGISTERED = 2,
    SIGN_NEXT = 3,
    SIGN_MESSAGE = 4,
    ANTIKLEPTO_SIGNER_COMMITMENT = 5,
  }
}

export enum BTCCoin { 
  BTC = 0,
  TBTC = 1,
  LTC = 2,
  TLTC = 3,
}
export enum BTCOutputType { 
  UNKNOWN = 0,
  P2PKH = 1,
  P2SH = 2,
  P2WPKH = 3,
  P2WSH = 4,
}
