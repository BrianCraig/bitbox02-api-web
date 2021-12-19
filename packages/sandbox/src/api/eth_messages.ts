import { ETHPubRequest, ETHCoin, ETHRequest } from "../proto/eth_pb"
import { Request, Response } from '../proto/hww_pb'

import { SendHID, Encryption } from "./device"
import { BitBoxError } from "./errors"
import { withOp, withoutOp } from "./utils"

export interface ethPublicArgs {
  coin: ETHCoin
  keypathList: number []
  display: boolean
  outputType: ETHPubRequest.OutputType
  contractAddress: Uint8Array
}

export const ethPublic = (send: SendHID, {encrypt, decrypt}: Encryption ) => async (input: ethPublicArgs): Promise<string> => {
  // @ts-ignore
  let req = new ETHPubRequest([input.keypathList, input.coin, input.outputType, input.display, input.contractAddress])
  let wr = new ETHRequest();
  wr.setPub(req);
  let wr2 = new Request();
  wr2.setEth(wr);
  let data = wr2.serializeBinary();
  let resp = decrypt(withoutOp(await send(withOp(encrypt(data)))));
  let obj = Response.deserializeBinary(resp).toObject();
  if (obj.error) {
    throw new BitBoxError(obj.error.message, obj.error.code);
  }
  return obj.eth!.pub!.pub;
}
