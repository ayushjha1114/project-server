import * as mongoose from 'mongoose';

class VersionSchema extends mongoose.Schema {
    constructor(collectedSchema, option) {
        const versionSchema = Object.assign({
            createdAt: {
                default: Date.now(),
                required: true,
                type: Date,
            },
            deletedAt: {
                required: false,
                type: Date,
            },
            originalID: {
                required: true,
                type: String,
            },
            updatedBy: {
                required: false,
                type: String,
            },
        }, collectedSchema);
        super(versionSchema, option);
    }
}
export default VersionSchema;
