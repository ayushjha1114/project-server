import * as mongoose from 'mongoose';
import VersionableRepository from '../versionable/VersionableRepository';
import { IUserModel } from './IUserModel';
import { userModel } from './UserModel';

class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {
    constructor() {
        super(userModel);
    }
   public userCount() {
        return this.genericCount();
    }
    public userCreate(data) {
        console.log('inside user repo');
        return this.genericCreate(data);
    }
    public userDelete(data) {
        return this.genericDelete(data);
    }
    public userUpdate(data, id ) {
        return this.genericUpdate(data, id);
    }
    public userFind(data) {
        return this.genericFind(data);
    }
}

export default new UserRepository();
