import VersionSchema from '../versionable/VersionSchema';
class UserSchema extends VersionSchema {
    constructor(options) {
        const userSchema = {
            _id: String,
            address: String,
            approved: Boolean,
            city: String,
            complaint: String,
            email: String,
            metal: Number,
            name: String,
            password: String,
            plastic: Number,
            role: {
                required: true,
                type: String,
            },
            state: String,
            zip: String,
        };
        super( userSchema, options );
        // const ac = options.collection; // get collection name
    }
}
export default UserSchema;
