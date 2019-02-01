import * as mongoose from 'mongoose';
import { IUserModel } from './IUserModel';
import { userModel } from './UserModel';
class UserRepository {
    public static generate() {
        return String(mongoose.Types.ObjectId());
    }

    private model: mongoose.Model<IUserModel>;

    constructor() {
        this.model = userModel;
    }

    public userCount() {
        return this.model.countDocuments();
    }
    public userCreate(data): Promise<IUserModel> {
        return this.model.create({...data, _id: UserRepository.generate()});
    }
    public userDelete(data) {
        return this.model.deleteOne(data, (err) => {
            if (err) {
                return err;
            }
        });
    }
    public userUpdate(data) {
        return this.model.updateOne(data, (err) => {
            if (err) {
                return err;
            }
        });
    }
    public userFind(data) {
        return this.model.findOne(data, (err) => {
            if (err) {
                return err;
            }
        } );
    }
}

export default new UserRepository();
