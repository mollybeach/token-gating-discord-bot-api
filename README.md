# Token Gating Discord Bot API

This project involves a discord bot that curates access to a discord server based on verified user funds of specific token(s). The discord bot interfaces with a smart contract and accounts for user's relevant token holdings upon registration. This information is then stored onto a db using the serverless api where updated data entries are made based on a moralis connected webhook from respective smart contract.

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
```







.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
