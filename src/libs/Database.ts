import { seedInitial } from "./seedData";
import * as mongoose from "mongoose";
class Database {
    open(mongoUrl) {
        return new Promise((resolve, reject) => {
            mongoose
                .connect(
                    mongoUrl,
                    { useNewUrlParser: true }
                )
                .then(value => {
                    seedInitial();
                    resolve("connected to db");
                })
                .catch(err => {
                    reject("not connected");
                });
        });
    }

    static disconnect() {
        mongoose.connection.close();
    }
}

export default new Database();
