# Plurality Smart Contracts

The smart contracts for the identity layer of plurality.

## How to compile and deploy the smart contracts

1. Clone this repository

```
git clone https://github.com/Web3-Plurality/plurality-smart-contracts.git
```

2. Go into the plurality-smart-contracts/ folder and install the dependencies

```
npm install
```

3. Create a new .env file in the root of the folder and copy all the variables from .env.example file.  The private key variable will be empty. Put your own private key in this variable. You can use your metamask or any other wallet to get your private key.  

4. Compile the smart contract

```
npx hardhat compile
```

5. Deploy the smart contract on the network of your choice. We do it here on sepolia. Ensure that the account you are using to deploy the contract has enough gas to deploy the contract.

```
npx hardhat run scripts/deploy.ts --network sepolia
```

6. On successful deployment, you will see the deployed contract address. Something like this:

```
Contract deployed at: 0x123...
```

You can now use this address in setting up plurality-verifier for your dApp. Happy Development! 🚀
