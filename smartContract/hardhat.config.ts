import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
require("@nomicfoundation/hardhat-chai-matchers");



const config: HardhatUserConfig = {
  solidity: "0.8.7",
  
};

export default config;
