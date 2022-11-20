# ERC20 Lookup

Application for looking up the combination of an ERC20 address and a specific user wallet.

## Details

React application with blockchain connection using EthersJS. Application is minimal in terms of external libraries. There is minimal state management, with state primarily lifted to the core `Container` component.

UI styling is handled with TailwindCSS.

## Installation

1. Clone the repository from Github
2. Run `npm install`.
3. Run the app with `npm run start`.

An environment variable called `REACT_APP_PROVIDER_URL` is required. This will need to be a working provider URL for something like Alchemy or Infura. This can most easily be done by creating a `.env` file.

A demo example is available online.

## Missing Features

Application is missing some crucial features around robustness and error handling. For example it checks that the requested address is a smart contract, but it does not check that the contract is a valid ERC20. This may trigger errors if invalid addresses are used.
