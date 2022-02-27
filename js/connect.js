import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
window.addEventListener('trust-btn')
// set chain id and rpc mapping in provider options
const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        56: 'https://bsc-dataseed1.binance.org'
      },
      chainId: 56
    }
  }
}

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions // required
});

const provider = await web3Modal.connect();
await web3Modal.toggleModal();

// regular web3 provider methods
const newWeb3 = new Web3(provider);
const accounts = await newWeb3.eth.getAccounts();

console.log(accounts);