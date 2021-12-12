class BitBox02Error extends Error {
  public id: number;
  constructor(message: string, id: number){
    super(message);
    this.id = id;
  }
}

export const NotCompatibleBrowser = new BitBox02Error("Not compatible browser", 0);

export const DeviceVersionMismatch = new BitBox02Error("Device version must be greater than 7.0.0", 1);

export const UserDisconnectedDevice = new BitBox02Error("User disconnected the BitBox device", 2);

export const DevicePairingRejected = new BitBox02Error("Device rejected pairing code", 2);
