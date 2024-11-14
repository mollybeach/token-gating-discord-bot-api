import {getUser, updateUser} from "./users";
import { getToken} from "./tokens";
import { assignMessage } from "./message";

export async function grantDiscordRole(user_id: string, role_id: string) {
    const response = await fetch(
        `https://discordapp.com/api/guilds/${process.env.NEXT_PUBLIC_DISCORD_GUILD_ID}/members/${user_id}/roles/${role_id}`,
        {
          headers: {
            Authorization: `Bot ${process.env.NEXT_PUBLIC_DISCORD_BOT_TOKEN}`,  // Use the bot token to authenticate the request
          },
          method: "PUT",
        }
    );
    const data = await response.json();
    return data;
}
export async function removeDiscordRole(user_id: string, role_id: string) {
    const response = await fetch(
        `https://discordapp.com/api/guilds/${process.env.NEXT_PUBLIC_DISCORD_GUILD_ID}/members/${user_id}/roles/${role_id}`,
        {
          headers: {
            Authorization: `Bot ${process.env.NEXT_PUBLIC_DISCORD_BOT_TOKEN}`,  // Use the bot token to authenticate the request
          },
          method: "DELETE",
        }
    );
    const data = await response.json();
    return data;
}
export async function hasDiscordRole(user_id: string, role_id: string) {
    const response = await fetch(
        `https://discordapp.com/api/guilds/${process.env.NEXT_PUBLIC_DISCORD_GUILD_ID}/members/${user_id}/roles/${role_id}`,
        {
          headers: {
            Authorization: `Bot ${process.env.NEXT_PUBLIC_DISCORD_BOT_TOKEN}`,  // Use the bot token to authenticate the request
          },
          method: "GET",
        }
    );
    const data = await response.json();
    return data;
}

export async function updateRoleForToken(user_id: string, token_id: number, walletAddress: string, walletBalance: number) {
  // get the token roles
  const token = await getToken(token_id);
  const token_type = token.type;
  const token_roles = token.token_roles; // returns an array of objects
  // get the user roles
  const user = await getUser(user_id);
  const user_roles = user.user_roles;
  // function to determine if user already has role
  function userHasRole (user_roles_arr:[], role_id: string) {
    // @ts-ignore
    const role_arr = user_roles_arr.filter((item) => { return item._id === role_id});
    return role_arr
  }
  // update the user roles
  function roleUpdate(token_id: number, role_id: string, i: number) {
    // determine if user already has role
    const hasRoleArr = userHasRole(user_roles, role_id);
    const hasRole = hasRoleArr.length > 0;
    // calculate the curr next and previous role amounts
    const currAmt = token_roles[i].required_amount;
    const nxtAmt = token_roles[i++].required_amount;
    const prvAmt = token_roles[i--].required_amount;
    const thisRoleName = token_roles[i].role_name;
    // determine if the user curr role matches the token role price
    const atTop = walletBalance >= currAmt && token_roles.length - 2 === i;
    const keepRole =
      (walletBalance >= currAmt && walletBalance < nxtAmt) ||
      (walletBalance >= currAmt && token_roles.length - 2 === i);
    const moveDown =
      walletBalance < currAmt && walletBalance >= prvAmt && i != 0;
    const moveUp = walletBalance >= nxtAmt && token_roles.length - 2 != i;
    const atBottom = i === 0;
    const zeroBalance = walletBalance === 0;
    // add post role to the user and discord
    function addRole(message: string) {
      const newToken = {
        _id: token_id,
        token_roles: [
          {
            _id: role_id,
            token_id: token_id,
            role_name: thisRoleName,
            required_amount: currAmt,
          },
        ],
        type: token_type,
      };
      const newRole = {
        _id: role_id,
        token_id: token_id,
        role_name: thisRoleName,
        required_amount: currAmt,
      };
      // if user has the role, createUser will update the user
      user.public_address = walletAddress;
      // add new token to the user
      const tokensArr = user.tokens;
      tokensArr.push(newToken);
      // add new role to the user
      const rolesArr = user.user_roles;
      rolesArr.push(newRole);
      // update the user
      updateUser(user_id, user.public_address, tokensArr, rolesArr);
      //grant the role discord role to the user
      grantDiscordRole(user_id, role_id);
      // message the user about the updates
      assignMessage(token_roles[i].role_name, token_type, true, false);
      console.log(message);
    }
    // remove the role from the user and discord
    function removeRole(message: string, token_id?: number) {
      user.public_address = walletAddress;
      // remove the role from the user
      const rolesArr = user.user_roles;
      rolesArr.splice(rolesArr.indexOf(role_id), 1);
      // remove the token from the user if balance is zero
      const tokensArr = user.tokens;
      // if token_id is passed in, remove the token from the user
      if (token_id) {
        console.log(
          "Removing Token Data from User Because Balance is Zero " + token_id
        );
        tokensArr.splice(tokensArr.indexOf(token_id), 1);
      }
      updateUser(user_id, user.public_address, tokensArr, rolesArr);
      // remove the discord role from the user
      removeDiscordRole(user_id, role_id);
      // message the user about the updates
      console.log(message);
      assignMessage(token_roles[i].role_name, token_type, false, false);
    }
    function keptRole(message: string) {
      //update user balances
      updateUser(user_id, user.public_address, user.tokens, user.user_roles);
      // assign result message
      assignMessage(token_roles[i].role_name, token_type, false, false);
      // message the user about the updates
      console.log(message);
    }

    if (atTop) {
      hasRole === true ?keptRole("Congrats "+user_id+" Kept Role"+role_id+" Reached the Maxiumum Role Level for Token Thank You!!"):addRole("Congrats "+user_id+" You've qualified for a new role : "+role_id+" Upgrading Your Role Status....");
    } else if (keepRole) {
      hasRole === true ?keptRole("Dear "+user_id+" Kept Role "+role_id+"Buy more tokens to Increase Role Level!!!!"):addRole("Congrats "+user_id+" You've qualified for a new role :"+role_id+" Upgrading Your Role Status....");
    } else if (moveUp) {
      hasRole?removeRole("Congrats "+user_id+" Previous Role :"+role_id+" Was Removed. Upgrading Your Role Status...."):console.log("Congrats "+user_id+" You're over qualified for this role : "+role_id+" Upgrading Your Role Status...."),roleUpdate(token_id,token_roles[i++]._id,i++);
    } else if (moveDown) {
      hasRole?removeRole("Dear "+user_id+" Previous Role :"+role_id+"Was Removed. Downgrading Your Role Status...."+role_id):console.log("Dear "+user_id+"You're no longer qualified for this role :"+role_id+" Downgrading Your Role Status...."),roleUpdate(token_id,token_roles[i++]._id,i--);
    } else if (atBottom) {
      hasRole?removeRole("Unfortunately "+ +user_id+" Previous Role :"+role_id+" Was Removed You're no longer qualified for this role : "+role_id+" or any other role for this token please purchase more tokens to get a role for this token"):console.log("Unfortunately "+user_id+"You're not qualified for this role"+role_id+"or any other role for this token please purchase more tokens to get a role for this token");
    } else if (zeroBalance) {
      hasRole?removeRole("Dear "+user_id+" Zero Balance: No longer own tokens removing token from db",token_id):console.log("Dear "+user_id+" Zero Balance: You dont own any tokens for this token");
    } else {
      console.log("Something went wrong");
    }
  }
  roleUpdate(token_id, token_roles[0]._id, 0);
}