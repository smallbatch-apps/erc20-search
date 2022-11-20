import { ethers } from "ethers";

import abi from "./erc20.json";

const provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_PROVIDER_URL);

export const getContract = (address: string): ethers.Contract => {
  return new ethers.Contract(address, abi, provider);
};

export const getCode = async (contract: ethers.Contract): Promise<string> => {
  return await provider.getCode(contract.address);
};

export const getEventsForAddress = async (
  contract: ethers.Contract,
  address: string
): Promise<{ toEvents: ethers.Event[]; fromEvents: ethers.Event[] }> => {
  const fromEvents = await contract.queryFilter(contract.filters.Transfer(address), 0);
  const toEvents = await contract.queryFilter(contract.filters.Transfer(null, address), 0);
  return { fromEvents, toEvents };
};

export const getSymbol = async (contract: ethers.Contract): Promise<string> => {
  return await contract.symbol();
};

export const getDecimals = async (contract: ethers.Contract): Promise<string> => {
  return await contract.decimals();
};

export const getName = async (contract: ethers.Contract): Promise<string> => {
  return await contract.name();
};

export const isValidAddress = (address: string): boolean => ethers.utils.isAddress(address);
