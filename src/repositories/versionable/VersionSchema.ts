import * as mongoose from 'mongoose';

class VersionSchema extends mongoose.Schema {
    constructor(collectedSchema, option) {
        const versionSchema = Object.assign({
            createdAt: {
                default: Date.now(),
                required: true,
                type: Date,
            },
            deleted: {
                required: false,
                type: String,
            },
            originalID: {
                required: true,
                type: String,
            },
            updatedAt: {
                required: false,
                type: Date,
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
