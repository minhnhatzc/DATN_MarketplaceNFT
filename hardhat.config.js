/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    bsctest: {
      url: "https://blue-stylish-rain.bsc-testnet.discover.quiknode.pro/06802bcd56f285056c23712350ade3a33eeee255/",
      accounts: [process.env.PRIV_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.API_KEY
  }

};
