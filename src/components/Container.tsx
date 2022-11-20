import { FC, useReducer } from "react";

import { Form, Table, Details } from "./";

import { searchReducer, initialSearchState } from "../reducers";

export const Container: FC = () => {
  const [state, dispatch] = useReducer(searchReducer, initialSearchState);

  return (
    <div className="container mx-auto my-5">
      <h3 className="text-xl font-bold text-indigo-100 mb-3">Enter Addresses</h3>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
        <div className="md:col-span-3">
          <Form state={state} dispatch={dispatch} />
        </div>
        <div className="md:col-span-2">
          <Details state={state} />
        </div>
      </div>
      <Table state={state} events={state.toEvents!} addressHeading="From" heading="Transactions To Account" />
      <Table state={state} events={state.fromEvents!} addressHeading="To" heading="Transactions From Account" />
    </div>
  );
};
