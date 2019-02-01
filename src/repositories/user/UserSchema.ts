import * as mongoose from 'mongoose';

class UserSchema extends mongoose.Schema {
    constructor(options) {
        const userSchema = {
            _id: String,
            email: String,
            name: String,
            role: String,
        };
        super(userSchema, options);
        const ac = options.collection;
    }
}
export default UserSchema;
