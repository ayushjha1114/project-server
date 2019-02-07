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

        return super.genericCreate(data, true);
    }
    public userDelete(data) {
        return super.genericDelete(data);
    }
    public userUpdate(data, id ) {
        return super.genericUpdate(data, id);
    }
    public userFindOne(data) {
        return super.genericFindOne(data);
    }
    public userFindAll(data, skip, limit) {
        console.log("############### inside userrepo", data);
        return super.genericFindAll(data, skip, limit);
    }
}

export default new UserRepository();
