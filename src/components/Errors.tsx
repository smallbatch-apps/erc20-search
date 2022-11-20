import { FC } from "react";

import { SearchState } from "../reducers";

type Props = { state: SearchState };

export const Errors: FC<Props> = ({ state }) => {
  return (
    <>
      {state.errors!.length > 0 && (
        <ul className="text-yellow-100">
          {state.errors!.map((error) => (
            <li>{error}</li>
          ))}
        </ul>
      )}
    </>
  );
};
