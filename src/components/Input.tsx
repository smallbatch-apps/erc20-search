import { FC, Dispatch, SetStateAction } from "react";

type Props = { value: string; name: string; label: string; setState: Dispatch<SetStateAction<string>> };

export const Input: FC<Props> = ({ value, setState, name, label }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        value={value}
        pattern="^0x[a-fA-F0-9]{40}$"
        name={name}
        placeholder="Enter a valid address"
        className="-mt-2 text-sm rounded-sm border-2 border-indigo-800 py-1 text-indigo-800"
        onChange={({ target }) => setState(target.value)}
      />
    </>
  );
};
