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
    public genericCreate(data): Promise<D> {
        const id = VersionableRepository.generate();
        console.log(typeof id);
        return this.model.create({...data, originalID: id, _id: id});
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
        this.model.updateOne({ _id: previousId }, {deleteAt: Date.now()} , (err) => {
            if (err) {
                return err;
            }
        });
        const newId = VersionableRepository.generate();
        // const fetch = await this.model.findById({_id: previousId});
        // console.log('#########', fetch);
        return this.model.create({...data, originalID: previousId, _id: newId });
        return this.model.updateOne({ _id: newId },  data , (err) => {
            if (err) {
                return err;
            }
        });
    }
    public genericFind(data): mongoose.DocumentQuery<D, D> {
        return this.model.findOne(data, (err) => {
            if (err) {
                return err;
            }
        } );
    }
}
export default VersionableRepository;
