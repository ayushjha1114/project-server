import * as bcrypt from 'bcrypt';
import * as mongoose from 'mongoose';
import { IUserModel } from '../user/IUserModel';

class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    public static generate(): string {
        return String(mongoose.Types.ObjectId());
    }
    private model: M;
    constructor(Model) {
        this.model = Model;
    }

    public genericCount(): mongoose.Query<number> {
        return this.model.countDocuments();
    }

    public genericOrderCount(data): mongoose.Query<number> {
        return this.model.countDocuments(data);
    }

    public genericCreate(data, flag: boolean): Promise<D> {
        const id = VersionableRepository.generate();
        if (flag === true) {
            const hash: string = bcrypt.hashSync(data.password, 10);
            return this.model.create({...data, originalID: id, _id: id, password: hash});
        }
        else {
            return this.model.create({...data, createdAt: Date.now(), _id: id});
        }
    }
    public async genericDelete(data): Promise<any> {
        const fetch = await this.genericFindOne({originalID: data.id, deletedAt: {$exists: false}}).lean();
        if (fetch !== null) {
            return this.model.updateOne({ _id: data.id }, {deletedAt: Date.now()} , (err) => {
                if (err) {
                    throw err;
                }
            });
        }
        else {
            // tslint:disable-next-line:no-string-throw
            throw ('Data not Found');
        }
    }
    public async genericUpdate(data, previousId: string): Promise<D> {
        let newData = {};
        const fetch = await this.genericFindOne({originalID: previousId, deletedAt: {$exists: false}}).lean();
        if (data.hasOwnProperty('approved')) {
            newData = Object.assign(fetch, data);
        } else {
            newData = Object.assign(fetch, data, {approved: false});
        }
        const result =  await this.genericCreate(newData, false);
        this.model.updateOne({ originalID: previousId }, {deletedAt: Date.now()} , (err) => {
            if (err) {
                throw err;
            }
        });
        return result;
    }
    public genericFindOne(data: object): mongoose.DocumentQuery<D, D> {
        return this.model.findOne(data, (err) => {
            if (err) {
                console.log(err);
                throw err;
            }
        } );
    }
    public genericFindAll(data: object, value: string, value2: string): mongoose.DocumentQuery<D[], D>  {
        const tempValue: number = Number(value);
        const tempValue2: number = Number(value2);
        // tslint:disable-next-line:no-null-keyword
        return this.model.find(data, null, { skip: tempValue, limit: tempValue2 }, (err, result) => {
            if (err) {
                throw err;
            }
        } );
    }
}
export default VersionableRepository;
