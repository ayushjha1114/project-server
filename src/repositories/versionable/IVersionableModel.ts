import * as mongoose from 'mongoose';

export interface IVersionableModel extends mongoose.Document {
    createdAt: Date;
    deleted: string;
    updatedAt: Date;
    updatedBy: string;
    originalID: string;
}
