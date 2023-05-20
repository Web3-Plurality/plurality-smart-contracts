# plurality-smart-contracts

The smart contracts for the identity layer of plurality

## How to deploy

1. Clone this repository

```
git clone https://github.com/Web3-Plurality/zk-onchain-identity-verification.git
```

2. Install the dependencies

```
npm install
```

3. Compile the smart contract

```
npx hardhat compile
```

4. Create an .env file using .env.example as a template and then put your private key in the .env file.

5. Deploy the smart contract on the network of your choice. We do it here on sepolia. Ensure that the account you are using to deploy the contract has enough gas to deploy the contract.

```
npx hardhat run scripts/deploy.js --network sepolia
```
