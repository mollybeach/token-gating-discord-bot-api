const tokenDefaults = [
  {
    _id: 0,
    type: 'Gryffindor',
    token_roles: [
      {
        _id: 'N1',
        role_name: 'Novice',
        required_amount: 1
      },
      {
        _id: 'J1',
        role_name: 'Journeyman',
        required_amount: 10
      },
      {
        _id: 'E1',
        role_name: 'Expert',
        required_amount: 100
      },
      {
        _id: 'M1',
        role_name: 'Master',
        required_amount: 1000
      }
    ]
  },
  {
    _id: 1,
    type: 'Hufflepuff',
    token_roles: [
      {
        _id: 'N2',
        role_name: 'Novice',
        required_amount: 1
      },
      {
        _id: 'J2',
        role_name: 'Journeyman',
        required_amount: 10
      },
      {
        _id: 'E2',
        role_name: 'Expert',
        required_amount: 100
      },
      {
        _id: 'M2',
        role_name: 'Master',
        required_amount: 1000
      }
    ]
  },
  {
    _id: 2,
    type: 'Slytherin',
    token_roles: [
      {
        _id: 'N3',
        role_name: 'Novice',
        required_amount: 1
      },
      {
        _id: 'J3',
        role_name: 'Journeyman',
        required_amount: 10
      },
      {
        _id: 'E3',
        role_name: 'Expert',
        required_amount: 100
      },
      {
        _id: 'M3',
        role_name: 'Master',
        required_amount: 1000
      }
    ]
  },
  {
    _id: 3,
    type: 'Ravenclaw',
    token_roles: [
      {
        _id: 'N4',
        role_name: 'Novice',
        required_amount: 1
      },
      {
        _id: 'J4',
        role_name: 'Journeyman',
        required_amount: 10
      },
      {
        _id: 'E4',
        role_name: 'Expert',
        required_amount: 100
      },
      {
        _id: 'M4',
        role_name: 'Master',
        required_amount: 1000
      }
    ]
  }
];

const mockOne = {
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
    amount: 1,
    token: tokenDefaults[3]
  }],
  user_roles: [tokenDefaults[1].token_roles[2], tokenDefaults[3].token_roles[0]]
};
const mockTwo = {
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
const mockThree = {
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
    amount: 10,
    token: tokenDefaults[2]
  },
  {
    _id: tokenDefaults[3]._id,
    amount: 0,
    token: tokenDefaults[3]
  }],
  user_roles: [tokenDefaults[2].token_roles[1]]
};


db = new Mongo().getDB("discordtokengate");

db.createCollection("tokens", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "type", "token_roles"],
      properties: {
        _id: {
          bsonType: "int",
          description: "must be a int and is required"
        },
        type: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        token_roles: {
          bsonType: "array",
          required: ["_id", "role_name", "required_amount"],
          properties: {
            _id: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            role_name: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            required_amount: {
              bsonType: "int",
              description: "must be a int and is required"
            }
          }
        }
      }
    }
  }
});
db.createCollection("discordusers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id"],
      properties: {
        _id: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        public_address: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        tokens: {
          bsonType: "array",
          required: ["_id", "amount"],
          properties: {
            _id: {
              bsonType: "int",
              description: "must be a int and is required"
            },
            amount: {
              bsonType: "int",
              description: "must be a int and is required"
            },
            token: {
              bsonType: "object",
              required: ["_id"],
              properties: {
                _id: {
                  bsonType: "int",
                  description: "must be a int and is required"
                },
                type: {
                  bsonType: "string"
                },
                token_roles: {
                  bsonType: "array",
                  properties: {
                    _id: {
                      bsonType: "string"
                    },
                    role_name: {
                      bsonType: "string"
                    },
                    required_amount: {
                      bsonType: "int"
                    }
                  }
                }
              }
            }
          }
        },
        user_roles: {
          bsonType: "array",
          required: ["_id", "required_amount"],
          properties: {
            _id: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            required_amount: {
              bsonType: "int",
              description: "must be a int and is required"
            },
            role_name: {
              bsonType: "string"
            }
          }
        }
      }
    }
  }
});

db.tokens.insertMany(tokenDefaults);
db.discordusers.insertMany([
  mockOne,
  mockTwo,
  mockThree
]);