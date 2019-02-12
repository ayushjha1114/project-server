import * as mongoose from 'mongoose';

export interface IVersionableModel extends mongoose.Document {
    createdAt: Date;
    deletedAt: Date;
    updatedBy: string;
    originalID: string;
}
