import { userModel } from "./UserModel";
import { IUserModel } from "./IUserModel";
import * as mongoose from "mongoose";

export class UserRepository {
    public model: mongoose.Model<IUserModel>;
    constructor() {
        this.model = userModel;
    }
    static generate() {
        return String(mongoose.Types.ObjectId);
    }
    userCreate(data: any): Promise<IUserModel> {
        return this.model.create(data);
    }
    userDelete(data) {
        return this.model.deleteOne(data);
    }
}
