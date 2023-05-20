import { ethers } from "hardhat";
require('dotenv').config({ path: __dirname + '../.env' });


async function main() {

  const semaphore_verifier_address = process.env.SEMAPHORE_VERIFIER_ADDRESS; //sepolia address for semaphore verifier contract
  const incremental_binary_tree_address = process.env.INCREMENTAL_BINARY_TREE_ADDRESS; //sepolia address for IncrementalBinaryTree library

  const [deployer] = await ethers.getSigners();

  console.log(
  "Deploying contracts with the account:",
  deployer.address
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const PluralIdentity = await ethers.getContractFactory("PluralIdentity", {
    libraries: {
      "IncrementalBinaryTree" : incremental_binary_tree_address! 
    }
  });

  const contract = await PluralIdentity.deploy(semaphore_verifier_address);

  await contract.deployed();

  console.log("Contract deployed at:", contract.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
