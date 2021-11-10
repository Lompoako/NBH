/* eslint-disable no-unused-vars */
require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider-privkey');
const privateKeys = process.env.PRIVATE_KEYS || "";
const INFURA_API_KEY=process.env.INFURA_API_KEY;
const INFURA_API_SECRET=process.env.INFURA_API_SECRET;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "1337" // Match any network id
    },
    main: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys.split(','), // Array of account private keys
          `https://mainnet.infura.io/v3/fb764ceee1d94cbf8916ae0284270449${process.env.INFURA_API_SECRET}`// Url to an Ethereum Node
        )
      },
      gas: 55100000,
      gasPrice: 5510000000, // 5 gwei
      network_id: 1
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys.split(','), // Array of account private keys
          `https://mainnet.infura.io/v3/fb764ceee1d94cbf8916ae0284270449${process.env.INFURA_API_SECRET}`// Url to an Ethereum Node
          
        )
      },
      gas: 5000000,
      gasPrice: 5000000000, // 5 gwei
      network_id: 42
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys.split(','), // Array of account private keys
          `https://mainnet.infura.io/v3/fb764ceee1d94cbf8916ae0284270449${process.env.INFURA_API_SECRET}`// Url to an Ethereum Node
          
        )
      },
      gas: 5000000,
      gasPrice: 5000000000, // 5 gwei
      network_id: 4
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys.split(','), // Array of account private keys
          `https://mainnet.infura.io/v3/fb764ceee1d94cbf8916ae0284270449${process.env.INFURA_API_SECRET}`// Url to an Ethereum Node
          )
      },
      gas: 5000000,
      gasPrice: 5000000000, // 5 gwei
      network_id: 3
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: ">=0.6.0 <0.8.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}