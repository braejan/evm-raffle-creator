import Web3 from "web3";
import { InjectedConnector } from '@web3-react/injected-connector';

const SEPOLIA_TESTNET = 11155111;

const connector = new InjectedConnector({supportedChainIds: [SEPOLIA_TESTNET]});

const getLibrary = (provider) => {
    return new Web3(provider);
}

export { connector, getLibrary };