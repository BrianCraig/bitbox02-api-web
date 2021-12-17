import { createContext, FunctionComponent, useState } from "react";
import { connect as deviceConnect, Device } from "../api/device";
import { BitBoxError } from "../api/errors";
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
  const [closeError, setCloseError] = useState<BitBoxError>();
  const {execute, error, status, value: device} = useAsync(() => deviceConnect({
    onInfo: setInfo,
    onClose: setCloseError
  }), false);

  let connect = () => {
    execute();
    setInfo({});
    setCloseError(undefined);
  }

  return <DeviceContext.Provider value={{
    connect,
    connected: (status === "success") && !closeError, 
    connecting: status === "pending",
    error: error || closeError,
    info,
    device
  }}>{children}</DeviceContext.Provider>
}
