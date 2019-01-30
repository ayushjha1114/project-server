import * as mongoose from "mongoose";
class Database {
    open(mongoUrl){
        return new Promise((resolve, reject) => {
            mongoose.connect(mongoUrl, { useNewUrlParser: true })
            .then((value) => {
                resolve("connected to db");

            })
            .catch((err) => {
                reject("not connected");
            })
            const schema = new mongoose.Schema({
                name: String
            });
               const Dog = mongoose.model('Dog', schema);
                const puppy = new Dog({ name: 'bob' });
                puppy.save().then(() => console.log('meow'));
        })
        // mongoose.connect(mongoUrl, { useNewUrlParser: true }).then(() => {
        //     console.log("connected to db");
        // })
        // .catch((err) => {
        //     console.log("NOT CONNECTED TO DB")
        // })
    }
    static disconnect() {
        mongoose.connection.close();
    }
}
export default new Database();
