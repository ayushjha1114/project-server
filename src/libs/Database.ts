import * as mongoose from "mongoose";
class Database {
    open(mongoUrl){
        return new Promise((resolve, reject) => {
            mongoose.connect(mongoUrl, { useNewUrlParser: true })
            .then((value) => {
                resolve("connected to db");
                // const Cat = mongoose.model('Cat', { name: String });
                // const kitty = new Cat({ name: 'sweety' });
                // kitty.save().then(() => console.log('meow'));
            })
            .catch((err) => {
                reject("not connected");
            })
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
