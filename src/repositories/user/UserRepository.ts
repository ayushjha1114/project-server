import * as mongoose from 'mongoose';
import VersionableRepository from '../versionable/VersionableRepository';
import { IUserModel } from './IUserModel';
import { userModel } from './UserModel';

class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {
    constructor() {
        super(userModel);
    }
   public userCount(): mongoose.Query<number> {
        return super.genericCount();
    }
    public userOrderCount(data): mongoose.Query<number> {
        return super.genericOrderCount(data);
    }
    public userCreate(data): Promise<IUserModel> {
        return super.genericCreate(data, true);
    }
    public userDelete(data): Promise<any> {
        return super.genericDelete(data);
    }
    public userUpdate(data, id ): Promise<IUserModel> {
        return super.genericUpdate(data, id);
    }
    public userFindOne(data): mongoose.DocumentQuery<IUserModel, IUserModel, {}> {
        return super.genericFindOne(data);
    }
    public userFindAll(data, skip, limit): mongoose.DocumentQuery<IUserModel[], IUserModel, {}> {
        return super.genericFindAll(data, skip, limit);
    }
}

export default new UserRepository();
