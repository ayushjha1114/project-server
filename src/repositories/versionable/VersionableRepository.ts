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
        return this.model.deleteOne(data, (err) => {
            if (err) {
                return err;
            }
        });
    }
    public genericUpdate(data, id): mongoose.Query<D> {
        return this.model.updateOne({ _id: id }, { $set: data }, (err) => {
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
