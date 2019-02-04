import * as mongoose from 'mongoose';

class VersionSchema extends mongoose.Schema {
    constructor(collectedSchema, option) {
        const versionSchema = Object.assign({
            collectedSchema,
            createdAt: {
                default: Date.now,
                required: true,
                type: Date,
            },
            deleteAt: {
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
        });
        super(versionSchema, option);
    }
}
export default VersionSchema;
