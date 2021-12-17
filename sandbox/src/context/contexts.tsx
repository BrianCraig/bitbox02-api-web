import { createContext, FunctionComponent, useState } from "react";
import { connect as deviceConnect, Device } from "../api/device";
import { Info } from "../api/messages";
import { useAsync } from "../utils/hooks";

interface Context {
  connected: boolean
  connect: () => void
  connecting: boolean
  info: Info
  error?: Error
  device?: Device
}

export const DeviceContext = createContext<Context>({} as any);

export const DeviceContextProvider: FunctionComponent = ({children}) => {
  const [info, setInfo] = useState<Info>({});
  const {execute: connect, error, status, value: device} = useAsync(() => deviceConnect({
    onInfo: setInfo
  }), false);

  return <DeviceContext.Provider value={{
    connected: status === "success",
    connect,
    connecting: status === "pending",
    error,
    info,
    device
  }}>{children}</DeviceContext.Provider>
}
