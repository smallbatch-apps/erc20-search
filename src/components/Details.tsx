import { FC } from "react";

import { SearchState } from "../reducers";

type Props = { state: SearchState };

export const Details: FC<Props> = ({ state }) => (
  <div className="text-indigo-400 font-semibold rounded">
    {state.name && state.symbol && (
      <div className="flex text-lg text-indigo-200 mb-3">
        <div className="flex-shrink mr-5">{state.symbol}</div>
        <div className="flex-1">{state.name}</div>
      </div>
    )}
    <div>Wallet Address</div>
    {state.address && (
      <div>
        <a className="text-yellow-200" href={`https://etherscan.io/address/${state.address}`}>
          {state.address?.slice(0, 26)}...
        </a>
      </div>
    )}
    {!state.address && <div>Address not set</div>}
    <div className="mt-3">ERC20 Address</div>
    {state.ercAddress && (
      <div>
        <a className="text-yellow-200" href={`https://etherscan.io/token/${state.ercAddress}`}>
          {state.ercAddress?.slice(0, 26)}...
        </a>
      </div>
    )}
    {!state.ercAddress && <div>Address not set</div>}
  </div>
);
