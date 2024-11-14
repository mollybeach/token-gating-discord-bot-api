// ... existing imports ...
import { createThirdwebClient, getContract } from "thirdweb";
import { createAuth } from "thirdweb/auth";
import { resolveContractAbi } from "thirdweb/contract";
import { mumbai } from "thirdweb/chains";
import { getRpcClient, eth_getBalance } from "thirdweb/rpc";

import type { NextApiRequest, NextApiResponse } from "next";
//import { unstable_getServerSession } from "next-auth/next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
//import { ethers } from "ethers";
//import discord from "discord.js";
//import { auth } from "./auth/auth";
require("dotenv").config();
import {createUser, getUser, emptyUser} from "./users";
import { getAllTokens} from "./tokens";
import { updateRoleForToken} from "./update-roles";
import { assignMessage } from "./message";


export default async function grantRole(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // Get the login payload out of the request
    const { loginPayload } = JSON.parse(req.body);
    // Get the Next Auth session so we can use the user ID as part of the discord API request
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
        res.status(401).json({ error: "Not logged in" });
        return;
    }

    const client = createThirdwebClient({ 
        clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID as string,
        secretKey: process.env.NEXT_PUBLIC_THIRDWEB_SECRET_KEY as string
    });
        
    const contract = getContract({
        client,
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string,
        chain: mumbai
    });

    // Resolve the ABI dynamically
    const contractAbi = await resolveContractAbi(contract);

    const authVerifier = createAuth({
        domain: "http://localhost:3000",
        client
    });
    const verificationResult = await authVerifier.verifyPayload({
        payload: loginPayload.payload,
        signature: loginPayload.signature
    });

    if (!verificationResult.valid) {
        res.status(401).json({ error: "Invalid login payload" });
        return;
    }

    const verifiedWalletAddress = verificationResult.payload.address;
    // @ts-ignore
    const { userId } = session; 
    // temp data for testing:
    // const user_id = process.env.NEXT_PUBLIC_DISCORD_USER_ID as string;
    console.log("User ID: " + userId);

    let user = await getUser(userId);
     if (!user) {
        console.log("user does not exist in db adding new user");
        user = await createUser(userId, verifiedWalletAddress);
     // if user exists in database: then update the user
     } else { 
        console.log("User Exists Updating User in Db");
        // await updateUser(user_id, verifiedWalletAddress);
        // remove the user data from the database each time for testing
        await emptyUser(userId);
    }
    // get all the tokens from the database and put their ids in an array
    const tokensInContract = await getAllTokens();
    for (let i = 0; i < tokensInContract.length; i++) {
        const rpcRequest = getRpcClient({ client, chain: mumbai });
        const balanceOfATokenInWallet = await eth_getBalance(rpcRequest, {
            address: verifiedWalletAddress as `0x${string}`
        });
        
        console.log('Your Wallet Address : ' + verifiedWalletAddress + 'Token ID: ' + tokensInContract[i]._id + ' Balance: ' + balanceOfATokenInWallet.toString());
        // check if the user roles need to be updated
        updateRoleForToken(userId, tokensInContract[i]._id, verifiedWalletAddress, Number(balanceOfATokenInWallet));
        if(i===tokensInContract.length-1){
            console.log('Finished updating all tokens');
            res.status(200).json({ message: assignMessage('', '', true, true) });
        }
    }
}