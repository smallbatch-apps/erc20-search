import { FC } from "react";
import { Row } from "./";
import { SearchState } from "../reducers";
import { ethers } from "ethers";

type Props = { state: SearchState; events: ethers.Event[]; heading: string; addressHeading: string };

export const Table: FC<Props> = ({ state, events, heading, addressHeading }) => {
  events.sort((a, b) => b.blockNumber - a.blockNumber);
  return (
    <>
      <h2 className="-mb-3 mt-5 font-xl font-bold">{heading}</h2>

      <div className="grid grid-cols-12 text-sm gap-3 p-3 bg-indigo-800 rounded border-2 border-indigo-600 my-5">
        <div className="text-indigo-300 text-lg font-bold justify-self-center col-span-7">{addressHeading}</div>
        <div className="text-indigo-300 text-lg font-bold justify-self-center col-span-2">Value</div>
        <div className="text-indigo-300 text-lg font-bold justify-self-center col-span-2">Block</div>
        <div></div>
        {events.length === 0 && (
          <div className="col-span-12 text-indigo-300 text-xl justify-self-center">No Events Found</div>
        )}

        {events.map((event) => (
          <Row state={state} event={event} key={event.transactionHash} addressHeading={addressHeading} />
        ))}
      </div>
    </>
  );
};
