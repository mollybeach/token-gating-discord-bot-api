import mongoose from 'mongoose';

interface RoleDocument extends mongoose.Document {
  _id: String,
  role_name: String,
  required_amount: Number
};
interface TokenDocument extends mongoose.Document {
  _id: String,
  token_type: String,
  roles: [RoleDocument]
};
interface TokensDocument {
  _id: String,
  amount: String,
  token: TokenDocument
};
interface UsersDocument {
  _id: String,
  public_address: String,
  tokens: [TokensDocument]
};

type UsersDocumentProps = {
  _id: String,
  public_address: String,
  tokens: mongoose.Types.DocumentArray<TokensDocument>
}
type UsersModelType = mongoose.Model<UsersDocument, {}, UsersDocumentProps>;

const roleSchema = new mongoose.Schema<RoleDocument>({
  _id: String,
  role_name: String,
  required_amount: Number
});
const tokenSchema = new mongoose.Schema<TokenDocument>({
  _id: Number,
  token_type: String,
  roles: [roleSchema]
});
const tokensSchema = new mongoose.Schema<TokensDocument>({
  _id: Number,
  amount: Number,
  token: tokenSchema
});
const UsersSchema = new mongoose.Schema<UsersDocument, UsersModelType>({
  _id: { type: String, required: true },
  public_address: { type: String, required: true },
  tokens: { type: [tokensSchema], required: true }
});

export const Users = (mongoose.model<UsersDocument, UsersModelType>('Users', UsersSchema));