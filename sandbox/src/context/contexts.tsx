import { createContext, FunctionComponent, useState } from "react";
import { connect as deviceConnect, Device } from "../api/device";
import { Info } from "../api/messages";

interface Context {
  connected: boolean
  connect: () => void
  info: Info
  device? :Device
}

export const DeviceContext = createContext<Context>({} as any);

export const DeviceContextProvider: FunctionComponent = ({children}) => {
  const [device, setDevice] = useState<Device>()
  const [info, setInfo] = useState<Info>({});
  const connect = () => deviceConnect({
    onInfo: setInfo
  }).then(setDevice)

  return <DeviceContext.Provider value={{
    connected: !!device,
    connect,
    info,
    device
  }}>{children}</DeviceContext.Provider>
}
