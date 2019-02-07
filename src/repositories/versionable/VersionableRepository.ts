import * as bcrypt from 'bcrypt';
import * as mongoose from 'mongoose';

class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    public static generate() {
        return String(mongoose.Types.ObjectId());
    }
    private model: M;
    constructor(Model) {
        this.model = Model;
    }

    public genericCount(): mongoose.Query<number> {
        return this.model.countDocuments();
    }
    public genericCreate(data, flag): Promise<D> {
        const id = VersionableRepository.generate();
        if (flag === true) {
            const hash = bcrypt.hashSync(data.password, 10);
            return this.model.create({...data, originalID: id, _id: id, password: hash});
        }
        else {
            return this.model.create({...data, createdAt: Date.now(), _id: id});
        }
    }
    public genericDelete(data) {
        console.log('qwerty', data);
        return this.model.deleteOne(data, (err) => {
            if (err) {
                return err;
            }
        });
    }
    public async genericUpdate(data, previousId) {
        console.log('DATA::::::::::::::::::::::::::::::::', data);
        const fetch = await this.model.findOne({originalID: previousId, deleteAt: {$exists: false}}).lean();
        // console.log('#########', fetch.toJSON());
        console.log('#########', fetch);
        const newData = Object.assign(fetch, data);
        console.log('@@@@@@@@@@', newData);
        const result =  await this.genericCreate(newData, false);
        console.log('$$$$$$$$$$', result);
        this.model.updateOne({ originalID: previousId }, {deleteAt: Date.now()} , (err) => {
            if (err) {
                return err;
            }
        });
        return result;
    }
    public genericFindOne(data): mongoose.DocumentQuery<D, D> {
        return this.model.findOne(data, (err) => {
            if (err) {
                return err;
            }
        } );
    }
    public genericFindAll(data, value, value2) {
        console.log(":::::::::::::::", value, value2);
        const tempValue = Number(value);
        const tempValue2 = Number(value2);
        return this.model.find(data, null, { skip: tempValue, limit: tempValue2 }, (err, result) => {
            if (err) {
                return err;
            }
        } );
    }
}
export default VersionableRepository;
