export class BitBoxError extends Error {
  public id: number;
  constructor(message: string, id: number){
    super(message);
    this.id = id;
  }
}

export const NotCompatibleBrowser = new BitBoxError("Not compatible browser", 0);

export const DeviceVersionMismatch = new BitBoxError("Device version must be greater than 7.0.0", 1);

export const UserDisconnectedDevice = new BitBoxError("User disconnected the BitBox device", 2);

export const DevicePairingRejected = new BitBoxError("Device rejected pairing code", 3);

export const DeviceExternallyClosed = new BitBoxError("Device Disconnected or Owned by another Application", 4);

export const NoDeviceSelected = new BitBoxError("No device has been selected on the Browser", 5);

export const DeviceClosedByApp = new BitBoxError("Device Closed imperatively by App", 6);
