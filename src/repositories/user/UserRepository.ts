import * as mongoose from 'mongoose';
import VersionableRepository from '../versionable/VersionableRepository';
import { IUserModel } from './IUserModel';
import { userModel } from './UserModel';

const versionableRepository = new VersionableRepository(userModel);
class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {

   public userCount(){
        return versionableRepository.genericCount();
    }
    public userCreate(data) {
        console.log('inside user repo');
        return versionableRepository.genericCreate(data);
    }
    public userDelete(data) {
        return versionableRepository.genericDelete(data);
    }
    public userUpdate(data) {
        return versionableRepository.genericUpdate(data);
    }
    public userFind(data) {
        return versionableRepository.genericFind(data);
    }
}

export default new UserRepository();
