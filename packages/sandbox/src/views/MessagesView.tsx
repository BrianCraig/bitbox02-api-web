import { Fragment, FunctionComponent, useContext, useState } from "react";
import { hexlify } from "@ethersproject/bytes";
import { Stack, Heading, Text, Code } from "@chakra-ui/react";
import { DeviceContext } from "../context/contexts";
import { EthPublicForm } from "../components/EthPublicForm";
import { ethPublicArgs } from "../api/eth_messages";

let toString = (or: any) => JSON.stringify(or, (_, el) => (el instanceof Uint8Array) ? hexlify(el) : el , 2)

interface MessagesComponentPros {
  req?: any
  resp?: any
  onSubmit: ((data: ethPublicArgs) => void )
}

const MessagesComponent: FunctionComponent<MessagesComponentPros> = ({req, resp, onSubmit}) => {
  return <Stack direction={"column"} maxWidth={1024} width={1024} margin={4} spacing={8}>
    <Heading>Ethereum Show Address</Heading>
    <Stack direction={"row"} spacing={4}>
      <Stack rounded={8} padding={4} spacing={2} border={"1px solid"} borderColor={"gray.400"} flex={"1 1 0px"}>
        <EthPublicForm onSubmit={onSubmit} />
      </Stack>
      <Stack rounded={8} padding={4} spacing={2} border={"1px solid"} borderColor={"gray.400"} flex={"1 1 0px"}>
        { req && <Fragment key="req">
          <Text>Request</Text>
          <Code whiteSpace={"pre"} maxWidth={470} overflowX={"auto"}>{toString(req)}</Code>
        </Fragment> }
        { resp && <Fragment key="res">
          <Text>Response</Text>
          <Code whiteSpace={"pre"} maxWidth={470} overflowX={"auto"}>{toString(resp)}</Code>
        </Fragment> }
        </Stack>
    </Stack>
  </Stack>
}


export const MessagesView = () => {
  const { device } = useContext(DeviceContext);
  const [req, setReq] = useState<any>();
  const [resp, setResp] = useState<string>();
  if (!device) return null;

  return <MessagesComponent
    req={req}
    resp={resp}
    onSubmit={
      (data: ethPublicArgs) => {
        setReq(data);
        device.ethPublic(data).then(setResp)
      }
    }
  />
}
