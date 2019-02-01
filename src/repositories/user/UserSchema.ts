import * as mongoose from 'mongoose';

class UserSchema extends mongoose.Schema {
    constructor(options) {
        const userSchema = {
            _id: String,
            name: String,
        };
        super(userSchema, options);
    }
}
export default UserSchema;
