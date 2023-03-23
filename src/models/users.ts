import { modelOptions, prop } from '@typegoose/typegoose';

class Role {
  @prop({ required: true, type: () => String })
  public _id?: string;
  @prop({ required: true, type: () => String })
  public roleName?: string;
  @prop({ required: true, type: () => String })
  public requiredAmount?: string;
}
class Token {
  @prop({ required: true, type: () => String })
  public _id?: string;
  @prop({ required: true, type: () => String })
  public tokenType?: string;
  @prop({ type: () => [Role] })
  public roles?: Role[];
}
class Tokens {
  @prop({ required: true, type: () => String })
  public _id?: string;
  @prop({ required: true, type: () => String })
  public amount?: string;
  @prop({ type: () => Token })
  public token?: Token;
}
@modelOptions({ schemaOptions: { collection: 'discordusers' }, options: { automaticName: true} })
export class Users {
  @prop({ required: true, type: () => String })
  public _id: string;
  @prop({ required: true, type: () => Number})
  public publicAddress?: string;
  @prop({ type: () => [Tokens] })
  public tokens?: Tokens[];
  @prop({ type: () => [Role] })
  public roles?: Role[];
}