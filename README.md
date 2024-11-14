# Token Gating Discord Bot API

This project involves a discord bot that curates access to a discord server based on verified user funds of specific token(s). The discord bot interfaces with a smart contract and accounts for user's relevant token holdings upon registration. This information is then stored onto a db using the serverless api where updated data entries are made based on a moralis connected webhook from respective smart contract.

## Features

- Serverless API
- Next.js Client
- Smart Contract
- WalletConnect
- Thirdweb

# VS Code Remote Development

Visual Studio Code Remote Development allows you to use a container, remote machine, or the Windows Subsystem for Linux (WSL) as a full-featured development environment. You can:

No source code needs to be on your local machine to get these benefits. \* Each extension in the Remote Development extension pack can run commands and other extensions directly inside a container, in WSL, or on a remote machine so that everything feels like it does when you run locally.

### Prerequisites

Please ensure [Visual Studio Code](https://code.visualstudio.com/) is installed on your computer. After installing, you will need to install the [Remote Development Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack).

### Setup

Please see instructions [here](https://code.visualstudio.com/docs/remote/remote-overview).

# Serverless Framework

## Test Offline

```
# Run serverless framework without a cloud environment
sls offline
```


## Configure Serverless Framework

```
# Configure dev credentials
sls config credentials --provider aws --profile token-gate-dev --key AKIAIOSFODNN7EXAMPLE --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEYser

# Configure test credentials
sls config credentials --provider aws --profile token-gate-test --key AKIAIOSFODNN7EXAMPLE --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEYser

# Configure production credentials
sls config credentials --provider aws --profile token-gate-prod --key AKIAIOSFODNN7EXAMPLE --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEYser
```

## Deploy Serverless Functions

```
# Deploy dev services
sls deploy --stage dev

# Deploy test services
sls deploy --stage test

# Deploy prod services
sls deploy --stage prod
```

## Usage of Serverless functions

```
~Offline Serverless Endpoints~

# Discord Bot | users:
http://localhost:3009/users - GET
http://localhost:3009/users/${id} - GET
http://localhost:3009/users/${id} - PUT
http://localhost:3009/users - POST

#Discord Bot | tokens:
http://localhost:3009/tokens - GET
http://localhost:3009/tokens/${id} - GET
http://localhost:3009/tokens/${id} - PUT

# Moralis Webhook:
http://localhost:3009/transfers - POST
```
# Project Setup
To run this project, you will need to:
The client folder name has been changed to docs to run on github pages
install all dependencies for both the server and client
start the server and client
```
cd src 
npm run project
```
# Run Project
To install all dependencies and start the project:
In a terminal window at the root of the project,
Run the following command:
```
npm run client
```
# View Project
In your browser, navigate to:
For Server: 
http://localhost:3009/
For Client:
http://localhost:3000/

# Project Structure
```
token-gating-discord-bot-api/
├── .devcontainer/
│   ├── devcontainer.json
│   ├── docker-compose.yml
│   └── Dockerfile
├── .git/
├── client/
│   ├── components/
│   │   └── SignIn.tsx
│   ├── pages/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   └── [...nextauth].tsx
│   │   │   ├── grant-role.tsx
│   │   │   ├── message.tsx
│   │   │   ├── tokens.tsx
│   │   │   ├── update-roles.tsx
│   │   │   └── users.tsx
│   │   ├── _app.tsx
│   │   └── index.tsx
│   ├── public/
│   │   ├── favicon.ico
│   │   └── thirdweb.svg
│   ├── styles/
│   │   ├── globals.css
│   │   └── Home.module.css
│   ├── .babelrc
│   ├── .env
│   ├── .eslintrc.json
│   ├── .gitignore
│   ├── LICENSE.md
│   ├── next-env.d.ts
│   ├── next.config.js
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── tsconfig.json
├── doc/
│   ├── doc-filelist.js
│   ├── doc-script.js
│   └── doc-style.css
├── ex/
│   ├── Dockerfile
│   ├── mongo-init.js
│   ├── mongoose-users.ts
│   ├── serverless-draft.yml
│   └── users.ts
├── infrastructure/
│   ├── aws/
│   │   ├── .gitignore
│   │   ├── .terraform.lock.hcl
│   │   ├── backend.tfvars
│   │   ├── fix_terraform_dns_resolution.sh
│   │   ├── infrastructure.tfvars
│   │   ├── main.tf
│   │   ├── outputs.tf
│   │   ├── provider.tf
│   │   └── variables.tf
│   └── README.md
├── smartContract/
│   ├── contracts/
│   │   └── Hogwarts.sol
│   ├── scripts/
│   │   └── deploy.ts
│   ├── test/
│   │   └── HogwartsTest.ts
│   ├── .$Hogwarts.drawio.bkp
│   ├── .gitignore
│   ├── hardhat.config.ts
│   ├── Hogwarts.drawio
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── tsconfig.json
├── src/
│   ├── dynamodb/
│   │   ├── my-dynamodb-data/
│   │   │   └── DynamoDB-init.js
│   │   ├── docker-compose.yaml
│   │   ├── package-lock.json
│   │   └── package.json
│   ├── models/
│   │   ├── index.ts
│   │   ├── mongoose-db.ts
│   │   ├── mongoose-users.ts
│   │   ├── tokens.ts
│   │   └── users.ts
│   ├── SmartContract/
│   │   ├── artifacts/
│   │   │   ├── build-info/
│   │   │   │   └── 12a00651cb07d064766be75da335c2da.json
│   │   │   └── contracts/
│   │   │   │   └── Hogwarts.sol/
│   │   │   │   │   ├── Address.dbg.json
│   │   │   │   │   ├── Address.json
│   │   │   │   │   ├── Context.dbg.json
│   │   │   │   │   ├── Context.json
│   │   │   │   │   ├── ERC1155.dbg.json
│   │   │   │   │   ├── ERC1155.json
│   │   │   │   │   ├── ERC165.dbg.json
│   │   │   │   │   ├── ERC165.json
│   │   │   │   │   ├── Hogwarts.dbg.json
│   │   │   │   │   ├── Hogwarts.json
│   │   │   │   │   ├── IERC1155.dbg.json
│   │   │   │   │   ├── IERC1155.json
│   │   │   │   │   ├── IERC1155MetadataURI.dbg.json
│   │   │   │   │   ├── IERC1155MetadataURI.json
│   │   │   │   │   ├── IERC1155Receiver.dbg.json
│   │   │   │   │   ├── IERC1155Receiver.json
│   │   │   │   │   ├── IERC165.dbg.json
│   │   │   │   │   ├── IERC165.json
│   │   │   │   │   ├── Ownable.dbg.json
│   │   │   │   │   └── Ownable.json
│   │   ├── cache/
│   │   │   └── solidity-files-cache.json
│   │   └── typechain-types/
│   │   │   ├── factories/
│   │   │   │   ├── Hogwarts.sol/
│   │   │   │   │   ├── ERC1155__factory.ts
│   │   │   │   │   ├── ERC165__factory.ts
│   │   │   │   │   ├── Hogwarts__factory.ts
│   │   │   │   │   ├── IERC1155__factory.ts
│   │   │   │   │   ├── IERC1155MetadataURI__factory.ts
│   │   │   │   │   ├── IERC1155Receiver__factory.ts
│   │   │   │   │   ├── IERC165__factory.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── Ownable__factory.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── Lock__factory.ts
│   │   │   ├── Hogwarts.sol/
│   │   │   │   ├── ERC1155.ts
│   │   │   │   ├── ERC165.ts
│   │   │   │   ├── Hogwarts.ts
│   │   │   │   ├── IERC1155.ts
│   │   │   │   ├── IERC1155MetadataURI.ts
│   │   │   │   ├── IERC1155Receiver.ts
│   │   │   │   ├── IERC165.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── Ownable.ts
│   │   │   ├── common.ts
│   │   │   ├── hardhat.d.ts
│   │   │   ├── index.ts
│   │   │   └── Lock.ts
│   ├── test/
│   │   ├── mocked-users.ts
│   │   ├── serverless-err-test.spec.ts
│   │   ├── serverless-test.spec.ts
│   │   └── webhook-test.json
│   ├── _BACKUP_77981.gitignore
│   ├── _BASE_77981.gitignore
│   ├── _LOCAL_77981.gitignore
│   ├── _REMOTE_77981.gitignore
│   ├── .dockerignore
│   ├── .env
│   ├── .gitignore
│   ├── .gitignore.swp
│   ├── docker-compose.yml
│   ├── handler.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── serverless.yml
│   ├── tsconfig.json
│   └── tslint.json
├── .DS_Store
├── package.json
└── README.md

```

