import { FC } from "react";
import { ethers } from "ethers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/sharp-solid-svg-icons";

import { SearchState } from "../reducers";

type Props = {
  state: SearchState;
  event: ethers.Event;
  addressHeading: string;
};

export const Row: FC<Props> = ({ state, event, addressHeading }) => {
  let { to, from, value } = event.args!;

  const address = addressHeading === "To" ? to : from;

  const parsedValue = value.toNumber() / Math.pow(10, state.decimals!);

  return (
    <>
      <div className="p-2 col-span-7 text-indigo-200">{address}</div>
      <div className="p-2 col-span-2 text-indigo-200">{parsedValue.toLocaleString()}</div>
      <div className="p-2 col-span-2 text-indigo-200">{event.blockNumber}</div>
      <div className="p-2 text-indigo-200">
        <a href={`https://etherscan.io/tx/${event.transactionHash}`} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </a>
      </div>
    </>
  );
};
