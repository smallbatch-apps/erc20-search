import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSpinner } from "@fortawesome/sharp-solid-svg-icons";

import { isValidAddress } from "../blockchain";

type Props = { address: string; ercAddress: string; loading: boolean };

export const SubmitButton: FC<Props> = ({ address, ercAddress, loading }) => {
  return (
    <button
      type="submit"
      disabled={!(isValidAddress(ercAddress) && isValidAddress(address))}
      className="bg-indigo-800 hover:bg-indigo-700 border border-1 border-indigo-400 hover:border-indigo-500 px-3 py-1 rounded text-indigo-100"
    >
      <FontAwesomeIcon icon={loading ? faSpinner : faMagnifyingGlass} className={loading ? "fa-spin mr-2" : "mr-2"} />
      Submit
    </button>
  );
};
