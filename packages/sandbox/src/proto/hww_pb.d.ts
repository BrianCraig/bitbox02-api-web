import * as jspb from 'google-protobuf'

import * as common_pb from './common_pb';
import * as backup_commands_pb from './backup_commands_pb';
import * as bitbox02_system_pb from './bitbox02_system_pb';
import * as btc_pb from './btc_pb';
import * as cardano_pb from './cardano_pb';
import * as eth_pb from './eth_pb';
import * as keystore_pb from './keystore_pb';
import * as mnemonic_pb from './mnemonic_pb';
import * as system_pb from './system_pb';
import * as perform_attestation_pb from './perform_attestation_pb';


export class Error extends jspb.Message {
  getCode(): number;
  setCode(value: number): Error;

  getMessage(): string;
  setMessage(value: string): Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Error.AsObject;
  static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
  static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Error;
  static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class Success extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Success.AsObject;
  static toObject(includeInstance: boolean, msg: Success): Success.AsObject;
  static serializeBinaryToWriter(message: Success, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Success;
  static deserializeBinaryFromReader(message: Success, reader: jspb.BinaryReader): Success;
}

export namespace Success {
  export type AsObject = {
  }
}

export class Request extends jspb.Message {
  getDeviceName(): bitbox02_system_pb.SetDeviceNameRequest | undefined;
  setDeviceName(value?: bitbox02_system_pb.SetDeviceNameRequest): Request;
  hasDeviceName(): boolean;
  clearDeviceName(): Request;

  getDeviceLanguage(): bitbox02_system_pb.SetDeviceLanguageRequest | undefined;
  setDeviceLanguage(value?: bitbox02_system_pb.SetDeviceLanguageRequest): Request;
  hasDeviceLanguage(): boolean;
  clearDeviceLanguage(): Request;

  getDeviceInfo(): bitbox02_system_pb.DeviceInfoRequest | undefined;
  setDeviceInfo(value?: bitbox02_system_pb.DeviceInfoRequest): Request;
  hasDeviceInfo(): boolean;
  clearDeviceInfo(): Request;

  getSetPassword(): bitbox02_system_pb.SetPasswordRequest | undefined;
  setSetPassword(value?: bitbox02_system_pb.SetPasswordRequest): Request;
  hasSetPassword(): boolean;
  clearSetPassword(): Request;

  getCreateBackup(): backup_commands_pb.CreateBackupRequest | undefined;
  setCreateBackup(value?: backup_commands_pb.CreateBackupRequest): Request;
  hasCreateBackup(): boolean;
  clearCreateBackup(): Request;

  getShowMnemonic(): mnemonic_pb.ShowMnemonicRequest | undefined;
  setShowMnemonic(value?: mnemonic_pb.ShowMnemonicRequest): Request;
  hasShowMnemonic(): boolean;
  clearShowMnemonic(): Request;

  getBtcPub(): btc_pb.BTCPubRequest | undefined;
  setBtcPub(value?: btc_pb.BTCPubRequest): Request;
  hasBtcPub(): boolean;
  clearBtcPub(): Request;

  getBtcSignInit(): btc_pb.BTCSignInitRequest | undefined;
  setBtcSignInit(value?: btc_pb.BTCSignInitRequest): Request;
  hasBtcSignInit(): boolean;
  clearBtcSignInit(): Request;

  getBtcSignInput(): btc_pb.BTCSignInputRequest | undefined;
  setBtcSignInput(value?: btc_pb.BTCSignInputRequest): Request;
  hasBtcSignInput(): boolean;
  clearBtcSignInput(): Request;

  getBtcSignOutput(): btc_pb.BTCSignOutputRequest | undefined;
  setBtcSignOutput(value?: btc_pb.BTCSignOutputRequest): Request;
  hasBtcSignOutput(): boolean;
  clearBtcSignOutput(): Request;

  getInsertRemoveSdcard(): bitbox02_system_pb.InsertRemoveSDCardRequest | undefined;
  setInsertRemoveSdcard(value?: bitbox02_system_pb.InsertRemoveSDCardRequest): Request;
  hasInsertRemoveSdcard(): boolean;
  clearInsertRemoveSdcard(): Request;

  getCheckSdcard(): bitbox02_system_pb.CheckSDCardRequest | undefined;
  setCheckSdcard(value?: bitbox02_system_pb.CheckSDCardRequest): Request;
  hasCheckSdcard(): boolean;
  clearCheckSdcard(): Request;

  getSetMnemonicPassphraseEnabled(): mnemonic_pb.SetMnemonicPassphraseEnabledRequest | undefined;
  setSetMnemonicPassphraseEnabled(value?: mnemonic_pb.SetMnemonicPassphraseEnabledRequest): Request;
  hasSetMnemonicPassphraseEnabled(): boolean;
  clearSetMnemonicPassphraseEnabled(): Request;

  getListBackups(): backup_commands_pb.ListBackupsRequest | undefined;
  setListBackups(value?: backup_commands_pb.ListBackupsRequest): Request;
  hasListBackups(): boolean;
  clearListBackups(): Request;

  getRestoreBackup(): backup_commands_pb.RestoreBackupRequest | undefined;
  setRestoreBackup(value?: backup_commands_pb.RestoreBackupRequest): Request;
  hasRestoreBackup(): boolean;
  clearRestoreBackup(): Request;

  getPerformAttestation(): perform_attestation_pb.PerformAttestationRequest | undefined;
  setPerformAttestation(value?: perform_attestation_pb.PerformAttestationRequest): Request;
  hasPerformAttestation(): boolean;
  clearPerformAttestation(): Request;

  getReboot(): system_pb.RebootRequest | undefined;
  setReboot(value?: system_pb.RebootRequest): Request;
  hasReboot(): boolean;
  clearReboot(): Request;

  getCheckBackup(): backup_commands_pb.CheckBackupRequest | undefined;
  setCheckBackup(value?: backup_commands_pb.CheckBackupRequest): Request;
  hasCheckBackup(): boolean;
  clearCheckBackup(): Request;

  getEth(): eth_pb.ETHRequest | undefined;
  setEth(value?: eth_pb.ETHRequest): Request;
  hasEth(): boolean;
  clearEth(): Request;

  getReset(): bitbox02_system_pb.ResetRequest | undefined;
  setReset(value?: bitbox02_system_pb.ResetRequest): Request;
  hasReset(): boolean;
  clearReset(): Request;

  getRestoreFromMnemonic(): mnemonic_pb.RestoreFromMnemonicRequest | undefined;
  setRestoreFromMnemonic(value?: mnemonic_pb.RestoreFromMnemonicRequest): Request;
  hasRestoreFromMnemonic(): boolean;
  clearRestoreFromMnemonic(): Request;

  getFingerprint(): common_pb.RootFingerprintRequest | undefined;
  setFingerprint(value?: common_pb.RootFingerprintRequest): Request;
  hasFingerprint(): boolean;
  clearFingerprint(): Request;

  getBtc(): btc_pb.BTCRequest | undefined;
  setBtc(value?: btc_pb.BTCRequest): Request;
  hasBtc(): boolean;
  clearBtc(): Request;

  getElectrumEncryptionKey(): keystore_pb.ElectrumEncryptionKeyRequest | undefined;
  setElectrumEncryptionKey(value?: keystore_pb.ElectrumEncryptionKeyRequest): Request;
  hasElectrumEncryptionKey(): boolean;
  clearElectrumEncryptionKey(): Request;

  getCardano(): cardano_pb.CardanoRequest | undefined;
  setCardano(value?: cardano_pb.CardanoRequest): Request;
  hasCardano(): boolean;
  clearCardano(): Request;

  getRequestCase(): Request.RequestCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request.AsObject;
  static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
  static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request;
  static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
  export type AsObject = {
    deviceName?: bitbox02_system_pb.SetDeviceNameRequest.AsObject,
    deviceLanguage?: bitbox02_system_pb.SetDeviceLanguageRequest.AsObject,
    deviceInfo?: bitbox02_system_pb.DeviceInfoRequest.AsObject,
    setPassword?: bitbox02_system_pb.SetPasswordRequest.AsObject,
    createBackup?: backup_commands_pb.CreateBackupRequest.AsObject,
    showMnemonic?: mnemonic_pb.ShowMnemonicRequest.AsObject,
    btcPub?: btc_pb.BTCPubRequest.AsObject,
    btcSignInit?: btc_pb.BTCSignInitRequest.AsObject,
    btcSignInput?: btc_pb.BTCSignInputRequest.AsObject,
    btcSignOutput?: btc_pb.BTCSignOutputRequest.AsObject,
    insertRemoveSdcard?: bitbox02_system_pb.InsertRemoveSDCardRequest.AsObject,
    checkSdcard?: bitbox02_system_pb.CheckSDCardRequest.AsObject,
    setMnemonicPassphraseEnabled?: mnemonic_pb.SetMnemonicPassphraseEnabledRequest.AsObject,
    listBackups?: backup_commands_pb.ListBackupsRequest.AsObject,
    restoreBackup?: backup_commands_pb.RestoreBackupRequest.AsObject,
    performAttestation?: perform_attestation_pb.PerformAttestationRequest.AsObject,
    reboot?: system_pb.RebootRequest.AsObject,
    checkBackup?: backup_commands_pb.CheckBackupRequest.AsObject,
    eth?: eth_pb.ETHRequest.AsObject,
    reset?: bitbox02_system_pb.ResetRequest.AsObject,
    restoreFromMnemonic?: mnemonic_pb.RestoreFromMnemonicRequest.AsObject,
    fingerprint?: common_pb.RootFingerprintRequest.AsObject,
    btc?: btc_pb.BTCRequest.AsObject,
    electrumEncryptionKey?: keystore_pb.ElectrumEncryptionKeyRequest.AsObject,
    cardano?: cardano_pb.CardanoRequest.AsObject,
  }

  export enum RequestCase { 
    REQUEST_NOT_SET = 0,
    DEVICE_NAME = 2,
    DEVICE_LANGUAGE = 3,
    DEVICE_INFO = 4,
    SET_PASSWORD = 5,
    CREATE_BACKUP = 6,
    SHOW_MNEMONIC = 7,
    BTC_PUB = 8,
    BTC_SIGN_INIT = 9,
    BTC_SIGN_INPUT = 10,
    BTC_SIGN_OUTPUT = 11,
    INSERT_REMOVE_SDCARD = 12,
    CHECK_SDCARD = 13,
    SET_MNEMONIC_PASSPHRASE_ENABLED = 14,
    LIST_BACKUPS = 15,
    RESTORE_BACKUP = 16,
    PERFORM_ATTESTATION = 17,
    REBOOT = 18,
    CHECK_BACKUP = 19,
    ETH = 20,
    RESET = 21,
    RESTORE_FROM_MNEMONIC = 22,
    FINGERPRINT = 24,
    BTC = 25,
    ELECTRUM_ENCRYPTION_KEY = 26,
    CARDANO = 27,
  }
}

export class Response extends jspb.Message {
  getSuccess(): Success | undefined;
  setSuccess(value?: Success): Response;
  hasSuccess(): boolean;
  clearSuccess(): Response;

  getError(): Error | undefined;
  setError(value?: Error): Response;
  hasError(): boolean;
  clearError(): Response;

  getDeviceInfo(): bitbox02_system_pb.DeviceInfoResponse | undefined;
  setDeviceInfo(value?: bitbox02_system_pb.DeviceInfoResponse): Response;
  hasDeviceInfo(): boolean;
  clearDeviceInfo(): Response;

  getPub(): common_pb.PubResponse | undefined;
  setPub(value?: common_pb.PubResponse): Response;
  hasPub(): boolean;
  clearPub(): Response;

  getBtcSignNext(): btc_pb.BTCSignNextResponse | undefined;
  setBtcSignNext(value?: btc_pb.BTCSignNextResponse): Response;
  hasBtcSignNext(): boolean;
  clearBtcSignNext(): Response;

  getListBackups(): backup_commands_pb.ListBackupsResponse | undefined;
  setListBackups(value?: backup_commands_pb.ListBackupsResponse): Response;
  hasListBackups(): boolean;
  clearListBackups(): Response;

  getCheckBackup(): backup_commands_pb.CheckBackupResponse | undefined;
  setCheckBackup(value?: backup_commands_pb.CheckBackupResponse): Response;
  hasCheckBackup(): boolean;
  clearCheckBackup(): Response;

  getPerformAttestation(): perform_attestation_pb.PerformAttestationResponse | undefined;
  setPerformAttestation(value?: perform_attestation_pb.PerformAttestationResponse): Response;
  hasPerformAttestation(): boolean;
  clearPerformAttestation(): Response;

  getCheckSdcard(): bitbox02_system_pb.CheckSDCardResponse | undefined;
  setCheckSdcard(value?: bitbox02_system_pb.CheckSDCardResponse): Response;
  hasCheckSdcard(): boolean;
  clearCheckSdcard(): Response;

  getEth(): eth_pb.ETHResponse | undefined;
  setEth(value?: eth_pb.ETHResponse): Response;
  hasEth(): boolean;
  clearEth(): Response;

  getFingerprint(): common_pb.RootFingerprintResponse | undefined;
  setFingerprint(value?: common_pb.RootFingerprintResponse): Response;
  hasFingerprint(): boolean;
  clearFingerprint(): Response;

  getBtc(): btc_pb.BTCResponse | undefined;
  setBtc(value?: btc_pb.BTCResponse): Response;
  hasBtc(): boolean;
  clearBtc(): Response;

  getElectrumEncryptionKey(): keystore_pb.ElectrumEncryptionKeyResponse | undefined;
  setElectrumEncryptionKey(value?: keystore_pb.ElectrumEncryptionKeyResponse): Response;
  hasElectrumEncryptionKey(): boolean;
  clearElectrumEncryptionKey(): Response;

  getCardano(): cardano_pb.CardanoResponse | undefined;
  setCardano(value?: cardano_pb.CardanoResponse): Response;
  hasCardano(): boolean;
  clearCardano(): Response;

  getResponseCase(): Response.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    success?: Success.AsObject,
    error?: Error.AsObject,
    deviceInfo?: bitbox02_system_pb.DeviceInfoResponse.AsObject,
    pub?: common_pb.PubResponse.AsObject,
    btcSignNext?: btc_pb.BTCSignNextResponse.AsObject,
    listBackups?: backup_commands_pb.ListBackupsResponse.AsObject,
    checkBackup?: backup_commands_pb.CheckBackupResponse.AsObject,
    performAttestation?: perform_attestation_pb.PerformAttestationResponse.AsObject,
    checkSdcard?: bitbox02_system_pb.CheckSDCardResponse.AsObject,
    eth?: eth_pb.ETHResponse.AsObject,
    fingerprint?: common_pb.RootFingerprintResponse.AsObject,
    btc?: btc_pb.BTCResponse.AsObject,
    electrumEncryptionKey?: keystore_pb.ElectrumEncryptionKeyResponse.AsObject,
    cardano?: cardano_pb.CardanoResponse.AsObject,
  }

  export enum ResponseCase { 
    RESPONSE_NOT_SET = 0,
    SUCCESS = 1,
    ERROR = 2,
    DEVICE_INFO = 4,
    PUB = 5,
    BTC_SIGN_NEXT = 6,
    LIST_BACKUPS = 7,
    CHECK_BACKUP = 8,
    PERFORM_ATTESTATION = 9,
    CHECK_SDCARD = 10,
    ETH = 11,
    FINGERPRINT = 12,
    BTC = 13,
    ELECTRUM_ENCRYPTION_KEY = 14,
    CARDANO = 15,
  }
}

