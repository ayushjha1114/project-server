import VersionSchema from '../versionable/VersionSchema';
class UserSchema extends VersionSchema {
    constructor(options) {
        const userSchema = {
            _id: String,
            email: String,
            name: String,
            role: String,
        };
        super( userSchema, options );
        // const ac = options.collection; // get collection name
    }
}
export default UserSchema;
