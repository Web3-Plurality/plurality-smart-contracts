import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config({ path: __dirname + '/.env' });

// test account for development
const privateKey = process.env.PRIVATE_KEY;
const nodeUrl = process.env.BLOCKCHAIN_NODE_URL;


const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    sepolia: {
        url: `${nodeUrl}`,
        accounts: [`0x${privateKey}`]
    }
  }
};

export default config;
