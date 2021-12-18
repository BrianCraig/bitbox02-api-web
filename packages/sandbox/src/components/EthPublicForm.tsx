import { Fragment, FunctionComponent } from "react";
import { Button, FormControl, FormLabel, FormHelperText, Input, Divider, Select, Switch } from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { ethPublicArgs } from "../api/eth_messages";
import { getKeypathFromString } from "../api/utils";

interface FormProps {
  display: boolean
}

export const EthPublicForm: FunctionComponent<{onSubmit: ((data: ethPublicArgs) => void)}> = ({onSubmit}) => {
  return <Formik<FormProps>
    initialValues={{ display: false }}
    onSubmit={({display}) => {
      onSubmit({
        coin: 0,
        keypathList: getKeypathFromString("m/44'/60'/0'/0/0"),
        contractAddress: Uint8Array.from([]),
        display,
        outputType: 0
      })
    }}
  >{({handleSubmit}) => (
    <Fragment>
      <FormControl>
        <FormLabel htmlFor='country'>Coin</FormLabel>
        <Select id='country'>
          <option>ETH</option>
          <option>ROPSTENETH</option>
          <option>RINKEBYETH</option>
        </Select>
      </FormControl>
      <Divider />
      <Field name="display">
             {({
               // @ts-ignore
               field
             }) => (
              <FormControl display='flex' alignItems='center'>
              <FormLabel htmlFor='display' mb='0'>
                Display address on device
              </FormLabel>
              <Switch {...field} />
            </FormControl>
             )}
           </Field>
      
      <Divider />
      <FormControl>
        <FormLabel htmlFor='email'>Keypath</FormLabel>
        <Input id='email' defaultValue="m/44'/60'/0'/0/0" />
        <FormHelperText>The actual sent data is a number[] derived using getKeypathFromString</FormHelperText>
      </FormControl>
      <Divider />
      <FormControl>
        <FormLabel htmlFor='xd'>Output type</FormLabel>
        <Select id='xd'>
          <option>ADDRESS</option>
          <option>XPUB</option>
        </Select>
      </FormControl>
      <Divider />
      <FormControl>
        <FormLabel htmlFor='contract'>Contract Address</FormLabel>
        <Input id='contract' placeholder={"0x..."} />
        <FormHelperText>Can be empty</FormHelperText>
      </FormControl>
      <Divider />
      <Button colorScheme={"blue"} onClick={handleSubmit as any}>Send</Button>
    </Fragment>
  )}</Formik>
}
