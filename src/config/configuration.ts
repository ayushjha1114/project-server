import { config } from "dotenv";
import { IConfig } from "./IConfig";
config();
//console.log("config() method : ", config());
const conf: IConfig = Object.freeze({
    port: process.env.PORT,
    key: process.env.KEY,
    mongoUrl: process.env.MONGO_URL
});
//console.log("port", conf.port);
export default conf;
