'use strict';

import dotenv from 'dotenv';
import { Users, Tokens, tokenDefaults } from './models';
import * as mock from './test/mocked-users';
import { connectToDatabase } from './models/mongoose-db';
dotenv.config({ path: './.env' });

// Token structure insert
export const initTokens = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  console.log('hit ' + event.path);
  await connectToDatabase()
    .catch(function (error) {
      console.log(error)      // Failure
    });
  await Tokens.insertMany(tokenDefaults)
    .then(() => callback({
      statusCode: 200,
      body: 'Tokens insert complete.'
    }))
    .catch(function (error) {
      console.log(error)      // Failure
      callback({
        statusCode: error.statusCode || 500,
        body: 'Tokens insert failed.'
      })
    });
}

// Mocked User insert
export const mockUsers = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  console.log('hit ' + event.path);
  await connectToDatabase()
    .catch(function (error) {
      console.log(error)      // Failure
    });
  await Users.insertMany([mock.mockOne, mock.mockTwo, mock.mockThree])
    .then(() => callback({
      statusCode: 200,
      body: 'Users insert complete.'
    }))
    .catch(function (error) {
      console.log(error)      // Failure
      callback({
        statusCode: error.statusCode || 500,
        body: 'Users insert failed.'
      })
    });
}

const parseUser = (user, index: number, amount: number, isTo: boolean) => {
  let parsedUser = user;
  let newRole;
  isTo ?
    parsedUser.tokens[index].amount += amount
    :
    parsedUser.tokens[index].amount -= amount
  newRole = parsedUser.tokens[index].token.token_roles.find((e, i) => {
    return parsedUser.tokens[index].amount >= e.required_amount && parsedUser.tokens[index].amount < parsedUser.tokens[index].token.token_roles[i + 1];
  })
  const roleIndex = parsedUser.user_roles.findIndex(role => {
    return role.token_id === parsedUser.tokens[index]._id;
  })
  roleIndex ?
    parsedUser.slice(roleIndex, 1)
    :
    null;
  newRole ?
    parsedUser.user_roles.push(newRole)
    :
    null;
  return parsedUser;
}

// TODO: test/log
export const transfers = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      let errCount;
      event.body.nftTransfers.forEach((e) => {
        if (e.from !== "0x0000000000000000000000000000000000000000") {
          Users.find({ public_address: e.from }, (err, user) => {
            if (err) {
              errCount.push(err);
            } else {
              const index = user.tokens.findIndex(token => {
                return token._id === e.tokenId;
              })
              const updatedUser = parseUser(user, index, e.amount, false);
              Users.findByIdAndUpdate(user._id, updatedUser);
            }
          });
        }
        if (e.to !== "0x0000000000000000000000000000000000000000") {
          Users.find({ public_address: e.to }, (err, user) => {
            if (err) {
              errCount.push(err);
            } else {
              const index = user.tokens.findIndex(token => {
                return token._id === e.tokenId;
              })
              const updatedUser = parseUser(user, index, e.amount, true);
              Users.findByIdAndUpdate(user._id, updatedUser)
            }
          });
        }
        // // Alternative method
        // const user = UsersModel.find({ public_address: e.from });
        // user.tokens[e.tokenId].amount -= e.amount;
        // console.log(user);
      })
        .then(() => {
          if (errCount.length = event.body.nftTransfers.length * 2) {
            callback(null, {
              statusCode: 500,
              headers: { 'Content-Type': 'text/plain' },
              body: 'Could not find user(s) with public address(s).'
            })
          } else {
            callback(null, {
              statusCode: 200,
              body: JSON.stringify('Done')
            })
          }
        });
    })
};

export const createUser = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Users.create(JSON.parse(event.body))
        .then(user => callback(null, {
          statusCode: 200,
          body: JSON.stringify(user)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not create the user.'
        }));
    })
}

export const getUser = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Users.findById(event.pathParameters.id)
        .then((user) => {
          user ?
            callback(null, {
              statusCode: 200,
              body: JSON.stringify(user)
            })
            :
            callback(null, {
              statusCode: 200,
              headers: { 'Content-Type': 'text/plain' },
              body: 'Could not fetch the user.'
            })
        })
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the user.'
        }));
    });
};

export const getUsers = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  console.log('hit ' + event.path);

  connectToDatabase()
    .then(() => {
      Users.find()
        .then(users => callback(null, {
          statusCode: 200,
          body: JSON.stringify(users)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the users.'
        }))
    });
};

export const updateUser = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Users.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body))
        .then((user) => {
          user ?
            callback(null, {
              statusCode: 200,
              body: JSON.stringify(user)
            })
            :
            callback(null, {
              statusCode: 200,
              headers: { 'Content-Type': 'text/plain' },
              body: 'Could not fetch the user.'
            })
        })
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not update the user.'
        }));
    });
};

export const getToken = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Tokens.findById(event.pathParameters.id)
        .then((token) => {
          token ?
            callback(null, {
              statusCode: 200,
              body: JSON.stringify(token)
            })
            :
            callback(null, {
              statusCode: 200,
              headers: { 'Content-Type': 'text/plain' },
              body: 'Could not fetch the token.'
            })
        })
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the token.'
        }));
    });
};

export const getTokens = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  console.log('hit ' + event.path);

  connectToDatabase()
    .then(() => {
      Tokens.find()
        .then(tokens => callback(null, {
          statusCode: 200,
          body: JSON.stringify(tokens)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the token.'
        }))
    });
};

export const updateToken = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Tokens.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body))
        .then((token) => {
          token ?
            callback(null, {
              statusCode: 200,
              body: JSON.stringify(token)
            })
            :
            callback(null, {
              statusCode: 200,
              headers: { 'Content-Type': 'text/plain' },
              body: 'Could not fetch the token.'
            })
        })
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not update the token.'
        }));
    });
};
