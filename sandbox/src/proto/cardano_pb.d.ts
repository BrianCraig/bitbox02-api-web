import * as jspb from 'google-protobuf'

import * as common_pb from './common_pb';


export class CardanoXpubsRequest extends jspb.Message {
  getKeypathsList(): Array<common_pb.Keypath>;
  setKeypathsList(value: Array<common_pb.Keypath>): CardanoXpubsRequest;
  clearKeypathsList(): CardanoXpubsRequest;
  addKeypaths(value?: common_pb.Keypath, index?: number): common_pb.Keypath;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CardanoXpubsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CardanoXpubsRequest): CardanoXpubsRequest.AsObject;
  static serializeBinaryToWriter(message: CardanoXpubsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CardanoXpubsRequest;
  static deserializeBinaryFromReader(message: CardanoXpubsRequest, reader: jspb.BinaryReader): CardanoXpubsRequest;
}

export namespace CardanoXpubsRequest {
  export type AsObject = {
    keypathsList: Array<common_pb.Keypath.AsObject>,
  }
}

export class CardanoXpubsResponse extends jspb.Message {
  getXpubsList(): Array<Uint8Array | string>;
  setXpubsList(value: Array<Uint8Array | string>): CardanoXpubsResponse;
  clearXpubsList(): CardanoXpubsResponse;
  addXpubs(value: Uint8Array | string, index?: number): CardanoXpubsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CardanoXpubsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CardanoXpubsResponse): CardanoXpubsResponse.AsObject;
  static serializeBinaryToWriter(message: CardanoXpubsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CardanoXpubsResponse;
  static deserializeBinaryFromReader(message: CardanoXpubsResponse, reader: jspb.BinaryReader): CardanoXpubsResponse;
}

export namespace CardanoXpubsResponse {
  export type AsObject = {
    xpubsList: Array<Uint8Array | string>,
  }
}

export class CardanoScriptConfig extends jspb.Message {
  getPkhSkh(): CardanoScriptConfig.PkhSkh | undefined;
  setPkhSkh(value?: CardanoScriptConfig.PkhSkh): CardanoScriptConfig;
  hasPkhSkh(): boolean;
  clearPkhSkh(): CardanoScriptConfig;

  getConfigCase(): CardanoScriptConfig.ConfigCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CardanoScriptConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CardanoScriptConfig): CardanoScriptConfig.AsObject;
  static serializeBinaryToWriter(message: CardanoScriptConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CardanoScriptConfig;
  static deserializeBinaryFromReader(message: CardanoScriptConfig, reader: jspb.BinaryReader): CardanoScriptConfig;
}

export namespace CardanoScriptConfig {
  export type AsObject = {
    pkhSkh?: CardanoScriptConfig.PkhSkh.AsObject,
  }

  export class PkhSkh extends jspb.Message {
    getKeypathPaymentList(): Array<number>;
    setKeypathPaymentList(value: Array<number>): PkhSkh;
    clearKeypathPaymentList(): PkhSkh;
    addKeypathPayment(value: number, index?: number): PkhSkh;

    getKeypathStakeList(): Array<number>;
    setKeypathStakeList(value: Array<number>): PkhSkh;
    clearKeypathStakeList(): PkhSkh;
    addKeypathStake(value: number, index?: number): PkhSkh;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PkhSkh.AsObject;
    static toObject(includeInstance: boolean, msg: PkhSkh): PkhSkh.AsObject;
    static serializeBinaryToWriter(message: PkhSkh, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PkhSkh;
    static deserializeBinaryFromReader(message: PkhSkh, reader: jspb.BinaryReader): PkhSkh;
  }

  export namespace PkhSkh {
    export type AsObject = {
      keypathPaymentList: Array<number>,
      keypathStakeList: Array<number>,
    }
  }


  export enum ConfigCase { 
    CONFIG_NOT_SET = 0,
    PKH_SKH = 1,
  }
}

export class CardanoAddressRequest extends jspb.Message {
  getNetwork(): CardanoNetwork;
  setNetwork(value: CardanoNetwork): CardanoAddressRequest;

  getDisplay(): boolean;
  setDisplay(value: boolean): CardanoAddressRequest;

  getScriptConfig(): CardanoScriptConfig | undefined;
  setScriptConfig(value?: CardanoScriptConfig): CardanoAddressRequest;
  hasScriptConfig(): boolean;
  clearScriptConfig(): CardanoAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CardanoAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CardanoAddressRequest): CardanoAddressRequest.AsObject;
  static serializeBinaryToWriter(message: CardanoAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CardanoAddressRequest;
  static deserializeBinaryFromReader(message: CardanoAddressRequest, reader: jspb.BinaryReader): CardanoAddressRequest;
}

export namespace CardanoAddressRequest {
  export type AsObject = {
    network: CardanoNetwork,
    display: boolean,
    scriptConfig?: CardanoScriptConfig.AsObject,
  }
}

export class CardanoSignTransactionRequest extends jspb.Message {
  getNetwork(): CardanoNetwork;
  setNetwork(value: CardanoNetwork): CardanoSignTransactionRequest;

  getInputsList(): Array<CardanoSignTransactionRequest.Input>;
  setInputsList(value: Array<CardanoSignTransactionRequest.Input>): CardanoSignTransactionRequest;
  clearInputsList(): CardanoSignTransactionRequest;
  addInputs(value?: CardanoSignTransactionRequest.Input, index?: number): CardanoSignTransactionRequest.Input;

  getOutputsList(): Array<CardanoSignTransactionRequest.Output>;
  setOutputsList(value: Array<CardanoSignTransactionRequest.Output>): CardanoSignTransactionRequest;
  clearOutputsList(): CardanoSignTransactionRequest;
  addOutputs(value?: CardanoSignTransactionRequest.Output, index?: number): CardanoSignTransactionRequest.Output;

  getFee(): number;
  setFee(value: number): CardanoSignTransactionRequest;

  getTtl(): number;
  setTtl(value: number): CardanoSignTransactionRequest;

  getCertificatesList(): Array<CardanoSignTransactionRequest.Certificate>;
  setCertificatesList(value: Array<CardanoSignTransactionRequest.Certificate>): CardanoSignTransactionRequest;
  clearCertificatesList(): CardanoSignTransactionRequest;
  addCertificates(value?: CardanoSignTransactionRequest.Certificate, index?: number): CardanoSignTransactionRequest.Certificate;

  getWithdrawalsList(): Array<CardanoSignTransactionRequest.Withdrawal>;
  setWithdrawalsList(value: Array<CardanoSignTransactionRequest.Withdrawal>): CardanoSignTransactionRequest;
  clearWithdrawalsList(): CardanoSignTransactionRequest;
  addWithdrawals(value?: CardanoSignTransactionRequest.Withdrawal, index?: number): CardanoSignTransactionRequest.Withdrawal;

  getValidityIntervalStart(): number;
  setValidityIntervalStart(value: number): CardanoSignTransactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CardanoSignTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CardanoSignTransactionRequest): CardanoSignTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: CardanoSignTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CardanoSignTransactionRequest;
  static deserializeBinaryFromReader(message: CardanoSignTransactionRequest, reader: jspb.BinaryReader): CardanoSignTransactionRequest;
}

export namespace CardanoSignTransactionRequest {
  export type AsObject = {
    network: CardanoNetwork,
    inputsList: Array<CardanoSignTransactionRequest.Input.AsObject>,
    outputsList: Array<CardanoSignTransactionRequest.Output.AsObject>,
    fee: number,
    ttl: number,
    certificatesList: Array<CardanoSignTransactionRequest.Certificate.AsObject>,
    withdrawalsList: Array<CardanoSignTransactionRequest.Withdrawal.AsObject>,
    validityIntervalStart: number,
  }

  export class Input extends jspb.Message {
    getKeypathList(): Array<number>;
    setKeypathList(value: Array<number>): Input;
    clearKeypathList(): Input;
    addKeypath(value: number, index?: number): Input;

    getPrevOutHash(): Uint8Array | string;
    getPrevOutHash_asU8(): Uint8Array;
    getPrevOutHash_asB64(): string;
    setPrevOutHash(value: Uint8Array | string): Input;

    getPrevOutIndex(): number;
    setPrevOutIndex(value: number): Input;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Input.AsObject;
    static toObject(includeInstance: boolean, msg: Input): Input.AsObject;
    static serializeBinaryToWriter(message: Input, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Input;
    static deserializeBinaryFromReader(message: Input, reader: jspb.BinaryReader): Input;
  }

  export namespace Input {
    export type AsObject = {
      keypathList: Array<number>,
      prevOutHash: Uint8Array | string,
      prevOutIndex: number,
    }
  }


  export class Output extends jspb.Message {
    getEncodedAddress(): string;
    setEncodedAddress(value: string): Output;

    getValue(): number;
    setValue(value: number): Output;

    getScriptConfig(): CardanoScriptConfig | undefined;
    setScriptConfig(value?: CardanoScriptConfig): Output;
    hasScriptConfig(): boolean;
    clearScriptConfig(): Output;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Output.AsObject;
    static toObject(includeInstance: boolean, msg: Output): Output.AsObject;
    static serializeBinaryToWriter(message: Output, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Output;
    static deserializeBinaryFromReader(message: Output, reader: jspb.BinaryReader): Output;
  }

  export namespace Output {
    export type AsObject = {
      encodedAddress: string,
      value: number,
      scriptConfig?: CardanoScriptConfig.AsObject,
    }
  }


  export class Certificate extends jspb.Message {
    getStakeRegistration(): common_pb.Keypath | undefined;
    setStakeRegistration(value?: common_pb.Keypath): Certificate;
    hasStakeRegistration(): boolean;
    clearStakeRegistration(): Certificate;

    getStakeDeregistration(): common_pb.Keypath | undefined;
    setStakeDeregistration(value?: common_pb.Keypath): Certificate;
    hasStakeDeregistration(): boolean;
    clearStakeDeregistration(): Certificate;

    getStakeDelegation(): CardanoSignTransactionRequest.Certificate.StakeDelegation | undefined;
    setStakeDelegation(value?: CardanoSignTransactionRequest.Certificate.StakeDelegation): Certificate;
    hasStakeDelegation(): boolean;
    clearStakeDelegation(): Certificate;

    getCertCase(): Certificate.CertCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Certificate.AsObject;
    static toObject(includeInstance: boolean, msg: Certificate): Certificate.AsObject;
    static serializeBinaryToWriter(message: Certificate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Certificate;
    static deserializeBinaryFromReader(message: Certificate, reader: jspb.BinaryReader): Certificate;
  }

  export namespace Certificate {
    export type AsObject = {
      stakeRegistration?: common_pb.Keypath.AsObject,
      stakeDeregistration?: common_pb.Keypath.AsObject,
      stakeDelegation?: CardanoSignTransactionRequest.Certificate.StakeDelegation.AsObject,
    }

    export class StakeDelegation extends jspb.Message {
      getKeypathList(): Array<number>;
      setKeypathList(value: Array<number>): StakeDelegation;
      clearKeypathList(): StakeDelegation;
      addKeypath(value: number, index?: number): StakeDelegation;

      getPoolKeyhash(): Uint8Array | string;
      getPoolKeyhash_asU8(): Uint8Array;
      getPoolKeyhash_asB64(): string;
      setPoolKeyhash(value: Uint8Array | string): StakeDelegation;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): StakeDelegation.AsObject;
      static toObject(includeInstance: boolean, msg: StakeDelegation): StakeDelegation.AsObject;
      static serializeBinaryToWriter(message: StakeDelegation, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): StakeDelegation;
      static deserializeBinaryFromReader(message: StakeDelegation, reader: jspb.BinaryReader): StakeDelegation;
    }

    export namespace StakeDelegation {
      export type AsObject = {
        keypathList: Array<number>,
        poolKeyhash: Uint8Array | string,
      }
    }


    export enum CertCase { 
      CERT_NOT_SET = 0,
      STAKE_REGISTRATION = 1,
      STAKE_DEREGISTRATION = 2,
      STAKE_DELEGATION = 3,
    }
  }


  export class Withdrawal extends jspb.Message {
    getKeypathList(): Array<number>;
    setKeypathList(value: Array<number>): Withdrawal;
    clearKeypathList(): Withdrawal;
    addKeypath(value: number, index?: number): Withdrawal;

    getValue(): number;
    setValue(value: number): Withdrawal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Withdrawal.AsObject;
    static toObject(includeInstance: boolean, msg: Withdrawal): Withdrawal.AsObject;
    static serializeBinaryToWriter(message: Withdrawal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Withdrawal;
    static deserializeBinaryFromReader(message: Withdrawal, reader: jspb.BinaryReader): Withdrawal;
  }

  export namespace Withdrawal {
    export type AsObject = {
      keypathList: Array<number>,
      value: number,
    }
  }

}

export class CardanoSignTransactionResponse extends jspb.Message {
  getShelleyWitnessesList(): Array<CardanoSignTransactionResponse.ShelleyWitness>;
  setShelleyWitnessesList(value: Array<CardanoSignTransactionResponse.ShelleyWitness>): CardanoSignTransactionResponse;
  clearShelleyWitnessesList(): CardanoSignTransactionResponse;
  addShelleyWitnesses(value?: CardanoSignTransactionResponse.ShelleyWitness, index?: number): CardanoSignTransactionResponse.ShelleyWitness;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CardanoSignTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CardanoSignTransactionResponse): CardanoSignTransactionResponse.AsObject;
  static serializeBinaryToWriter(message: CardanoSignTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CardanoSignTransactionResponse;
  static deserializeBinaryFromReader(message: CardanoSignTransactionResponse, reader: jspb.BinaryReader): CardanoSignTransactionResponse;
}

export namespace CardanoSignTransactionResponse {
  export type AsObject = {
    shelleyWitnessesList: Array<CardanoSignTransactionResponse.ShelleyWitness.AsObject>,
  }

  export class ShelleyWitness extends jspb.Message {
    getPublicKey(): Uint8Array | string;
    getPublicKey_asU8(): Uint8Array;
    getPublicKey_asB64(): string;
    setPublicKey(value: Uint8Array | string): ShelleyWitness;

    getSignature(): Uint8Array | string;
    getSignature_asU8(): Uint8Array;
    getSignature_asB64(): string;
    setSignature(value: Uint8Array | string): ShelleyWitness;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShelleyWitness.AsObject;
    static toObject(includeInstance: boolean, msg: ShelleyWitness): ShelleyWitness.AsObject;
    static serializeBinaryToWriter(message: ShelleyWitness, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShelleyWitness;
    static deserializeBinaryFromReader(message: ShelleyWitness, reader: jspb.BinaryReader): ShelleyWitness;
  }

  export namespace ShelleyWitness {
    export type AsObject = {
      publicKey: Uint8Array | string,
      signature: Uint8Array | string,
    }
  }

}

export class CardanoRequest extends jspb.Message {
  getXpubs(): CardanoXpubsRequest | undefined;
  setXpubs(value?: CardanoXpubsRequest): CardanoRequest;
  hasXpubs(): boolean;
  clearXpubs(): CardanoRequest;

  getAddress(): CardanoAddressRequest | undefined;
  setAddress(value?: CardanoAddressRequest): CardanoRequest;
  hasAddress(): boolean;
  clearAddress(): CardanoRequest;

  getSignTransaction(): CardanoSignTransactionRequest | undefined;
  setSignTransaction(value?: CardanoSignTransactionRequest): CardanoRequest;
  hasSignTransaction(): boolean;
  clearSignTransaction(): CardanoRequest;

  getRequestCase(): CardanoRequest.RequestCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CardanoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CardanoRequest): CardanoRequest.AsObject;
  static serializeBinaryToWriter(message: CardanoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CardanoRequest;
  static deserializeBinaryFromReader(message: CardanoRequest, reader: jspb.BinaryReader): CardanoRequest;
}

export namespace CardanoRequest {
  export type AsObject = {
    xpubs?: CardanoXpubsRequest.AsObject,
    address?: CardanoAddressRequest.AsObject,
    signTransaction?: CardanoSignTransactionRequest.AsObject,
  }

  export enum RequestCase { 
    REQUEST_NOT_SET = 0,
    XPUBS = 1,
    ADDRESS = 2,
    SIGN_TRANSACTION = 3,
  }
}

export class CardanoResponse extends jspb.Message {
  getXpubs(): CardanoXpubsResponse | undefined;
  setXpubs(value?: CardanoXpubsResponse): CardanoResponse;
  hasXpubs(): boolean;
  clearXpubs(): CardanoResponse;

  getPub(): common_pb.PubResponse | undefined;
  setPub(value?: common_pb.PubResponse): CardanoResponse;
  hasPub(): boolean;
  clearPub(): CardanoResponse;

  getSignTransaction(): CardanoSignTransactionResponse | undefined;
  setSignTransaction(value?: CardanoSignTransactionResponse): CardanoResponse;
  hasSignTransaction(): boolean;
  clearSignTransaction(): CardanoResponse;

  getResponseCase(): CardanoResponse.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CardanoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CardanoResponse): CardanoResponse.AsObject;
  static serializeBinaryToWriter(message: CardanoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CardanoResponse;
  static deserializeBinaryFromReader(message: CardanoResponse, reader: jspb.BinaryReader): CardanoResponse;
}

export namespace CardanoResponse {
  export type AsObject = {
    xpubs?: CardanoXpubsResponse.AsObject,
    pub?: common_pb.PubResponse.AsObject,
    signTransaction?: CardanoSignTransactionResponse.AsObject,
  }

  export enum ResponseCase { 
    RESPONSE_NOT_SET = 0,
    XPUBS = 1,
    PUB = 2,
    SIGN_TRANSACTION = 3,
  }
}

export enum CardanoNetwork { 
  CARDANOMAINNET = 0,
  CARDANOTESTNET = 1,
}
