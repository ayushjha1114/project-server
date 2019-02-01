import * as mongoose from 'mongoose';
import { seedInitial } from './seedData';
class Database {

    public static disconnect() {
        mongoose.connection.close();
    }
    public open(mongoUrl) {
        return new Promise((resolve, reject) => {
            mongoose
                .connect(
                    mongoUrl,
                    { useNewUrlParser: true },
                )
                .then((value) => {
                    seedInitial();
                    resolve('connected to db');
                })
                .catch((err) => {
                    reject('not connected');
                });
        });
    }
}

export default new Database();
