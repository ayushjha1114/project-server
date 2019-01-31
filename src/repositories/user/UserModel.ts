import UserSchema from "./UserSchema";
import { IUserModel } from "./IUserModel";
import * as mongoose from "mongoose";

export const userSchema = new UserSchema({
    collection: 'user'
})

export const userModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>(
    'user',
    userSchema // defining of schema is optional
)
