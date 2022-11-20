import { ethers } from "ethers";

export type SearchState = {
  address?: string;
  ercAddress?: string;
  loading?: boolean;
  canSearch?: boolean;
  searched?: boolean;
  name?: string;
  symbol?: string;
  decimals?: number;
  errors?: string[];
  toEvents?: ethers.Event[];
  fromEvents?: ethers.Event[];
};

export const initialSearchState = {
  address: "",
  ercAddress: "",
  loading: false,
  canSearch: false,
  searched: false,
  name: "",
  symbol: "",
  decimals: 18,
  errors: [],
  toEvents: [],
  fromEvents: [],
};

export enum ActionTypes {
  StartSearch = "START_SEARCH",
  SuccessfulSearch = "SUCCESSFUL_SEARCH",
  SetState = "SET_STATE",
  CancelSearch = "CANCEL_SEARCH",
  SetToEvents = "SET_TO_EVENTS",
  SetFromEvents = "SET_FROM_EVENTS",
  SetErrors = "SET_ERRORS",
  AddError = "ADD_ERROR",
}

export type Action = {
  type: ActionTypes;
  payload?: SearchState;
};

export const searchReducer = (state: SearchState, action: Action): SearchState => {
  switch (action.type) {
    case ActionTypes.StartSearch:
      return { ...state, ...action.payload, loading: true };
    case ActionTypes.SetState:
      return { ...state, ...action.payload };
    case ActionTypes.SuccessfulSearch:
      return { ...state, ...action.payload, loading: false };
    case ActionTypes.SetToEvents:
      return { ...state, toEvents: action.payload!.toEvents };
    case ActionTypes.SetFromEvents:
      return { ...state, fromEvents: action.payload!.fromEvents };
    case ActionTypes.CancelSearch:
      return { ...state, loading: false };
    case ActionTypes.SetErrors:
      return { ...state, errors: action.payload?.errors, loading: false };
    default:
      return { ...state };
  }
};
