<p align="center">
    <h1 align="center">
      <picture>
        <img width="40" alt="Plurality icon." src="https://github.com/Web3-Plurality/zk-onchain-identity-verification/blob/main/dapp-verifier/verifier-app/src/images/plurality.png">
      </picture>
      Plurality
    </h1>
</p>

| Plurality is the first identity-lego-building-block for dapp creators that lets them identify their users without using any third-party KYC provider or other middlemen, whilst preserving the privacy of users. It encourages modular application design, allowing dApp developers to choose and customize the on-chain and off-chain components they need. |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

# Plurality Smart Contracts

The smart contracts for the identity layer of plurality.

## How to compile and deploy the smart contracts

1. Clone this repository

```
git clone https://github.com/Web3-Plurality/plurality-smart-contracts.git
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
