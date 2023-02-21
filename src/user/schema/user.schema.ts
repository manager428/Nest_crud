import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { now, Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  userName: string;

  @Prop({ required: true })
  hashed_password: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  address: string;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  role: string;

  @Prop({ default: now() })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
