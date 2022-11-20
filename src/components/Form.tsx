import { FC, Dispatch, useState } from "react";

import { Errors, Input } from "./";

import {
  getEventsForAddress,
  getName,
  getSymbol,
  getContract,
  isValidAddress,
  getDecimals,
  getCode,
} from "../blockchain";

import { SearchState, Action, ActionTypes } from "../reducers";
import { SubmitButton } from "./SubmitButton";

type Props = {
  state: SearchState;
  dispatch: Dispatch<Action>;
};

export const Form: FC<Props> = ({ state, dispatch }) => {
  const [address, setAddress] = useState("");
  const [ercAddress, setErcAddress] = useState("");

  return (
    <form
      className="grid grid-cols-1 gap-3 content-center text-indigo-100 p-5 rounded-lg border border-2 border-indigo-600 bg-gradient-to-b from-indigo-900 to-indigo-800"
      onSubmit={async (event) => {
        event.preventDefault();
        dispatch({ type: ActionTypes.StartSearch, payload: { address, ercAddress } });
        if (!isValidAddress(ercAddress) || !isValidAddress(address)) {
          dispatch({ type: ActionTypes.SetErrors, payload: { errors: ["Invalid addresses provided"] } });
          return;
        }

        const contract = getContract(ercAddress);
        const code = await getCode(contract);

        if (code.length < 3) {
          dispatch({ type: ActionTypes.SetErrors, payload: { errors: ["ERC Address is not a contract"] } });
          return;
        }
        const decimals = await getDecimals(contract);
        dispatch({ type: ActionTypes.SetState, payload: { decimals: +decimals } });

        getSymbol(contract).then((symbol) => dispatch({ type: ActionTypes.SetState, payload: { symbol } }));
        getName(contract).then((name) => dispatch({ type: ActionTypes.SetState, payload: { name } }));

        getEventsForAddress(contract, address)
          .then((events) => {
            dispatch({ type: ActionTypes.SuccessfulSearch, payload: events });
          })
          .catch(() => {
            dispatch({ type: ActionTypes.SetErrors, payload: { errors: ["Unable to get events"] } });
          })
          .finally(() => dispatch({ type: ActionTypes.CancelSearch }));
      }}
    >
      <Errors state={state} />

      <Input value={ercAddress} setState={setErcAddress} name="ercAddress" label="Contract Address" />
      <Input value={address} setState={setAddress} name="address" label="Wallet Address" />

      <div className="justify-self-end">
        <SubmitButton ercAddress={ercAddress} address={address} loading={state.loading!} />
      </div>
    </form>
  );
};
