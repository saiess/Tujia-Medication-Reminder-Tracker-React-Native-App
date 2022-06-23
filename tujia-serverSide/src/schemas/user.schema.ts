import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ require: true })
  fullname: string;

  @Prop({ require: true, unique: true })
  email: string;

  @Prop({ require: true })
  password: string;

  @Prop()
  phone: string;

  @Prop({ default: 'active' })
  is_active: string;

  @Prop({ default: 'client' })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
