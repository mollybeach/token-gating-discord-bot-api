import mongoose, { InferSchemaType } from 'mongoose';

const TokenSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  type: { type: String },
  token_roles: [{
    _id: { type: String, required: true },
    token_id: { type: Number, required: true },
    role_name: { type: String },
    required_amount: { type: Number }
  }]
}, {
  collection: 'tokens'
});

const UsersSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  public_address: { type: String },
  tokens: [{
    _id: { type: Number },
    amount: { type: Number },
    token: TokenSchema
  }],
  user_roles: [{
    _id: { type: String },
    token_id: { type: Number },
    role_name: { type: String },
    required_amount: { type: String }
  }]
}, {
  collection: 'discordusers'
});

type User = InferSchemaType<typeof UsersSchema>
type Token = InferSchemaType<typeof TokenSchema>
export const Users = (mongoose.model<User>('Users', UsersSchema));
export const Tokens = (mongoose.model<Token>('Tokens', TokenSchema));