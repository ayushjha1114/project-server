import * as mongoose from 'mongoose';
import VersionableRepository from '../versionable/VersionableRepository';
import { IUserModel } from './IUserModel';
import { userModel } from './UserModel';

class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {
    constructor() {
        super(userModel);
    }
   public userCount() {
        return super.genericCount();
    }
    public userCreate(data) {
        console.log('inside user repo');
        return super.genericCreate(data);
    }
    public userDelete(data) {
        return super.genericDelete(data);
    }
    public userUpdate(data, id ) {
        return super.genericUpdate(data, id);
    }
    public userFind(data) {
        return super.genericFind(data);
    }
}

export default new UserRepository();
