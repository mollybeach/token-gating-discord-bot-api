import { tokenDefaults } from '../models/tokens';

export const mockOne = {
  _id: "JohnnyAppleSeed6600",
  public_address: "0x01",
  tokens: [{
    _id: tokenDefaults[0]._id,
    amount: 0,
    token: tokenDefaults[0]
  },
  {
    _id: tokenDefaults[1]._id,
    amount: 100,
    token: tokenDefaults[1]
  },
  {
    _id: tokenDefaults[2]._id,
    amount: 0,
    token: tokenDefaults[2]
  },
  {
    _id: tokenDefaults[3]._id,
    amount: 0,
    token: tokenDefaults[3]
  }],
  user_roles: [tokenDefaults[1].token_roles[2]]
};
export const mockTwo = {
  _id: "Oligarch1234",
  public_address: "0x02",
  tokens: [{
    _id: tokenDefaults[0]._id,
    amount: 10000,
    token: tokenDefaults[0]
  },
  {
    _id: tokenDefaults[1]._id,
    amount: 0,
    token: tokenDefaults[1]
  },
  {
    _id: tokenDefaults[2]._id,
    amount: 0,
    token: tokenDefaults[2]
  },
  {
    _id: tokenDefaults[3]._id,
    amount: 100,
    token: tokenDefaults[3]
  }],
  user_roles: [tokenDefaults[0].token_roles[3], tokenDefaults[3].token_roles[2]]
};
export const mockThree = {
  _id: "Padme3312",
  public_address: "0x03",
  tokens: [{
    _id: tokenDefaults[0]._id,
    amount: 0,
    token: tokenDefaults[0]
  },
  {
    _id: tokenDefaults[1]._id,
    amount: 0,
    token: tokenDefaults[1]
  },
  {
    _id: tokenDefaults[2]._id,
    amount: 0,
    token: tokenDefaults[2]
  },
  {
    _id: tokenDefaults[3]._id,
    amount: 0,
    token: tokenDefaults[3]
  }],
  user_roles: []
};

export const testOne = {
  _id: "OscarTheGrouch7145"
}