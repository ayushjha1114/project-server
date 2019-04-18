import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import Database from './libs/Database';
import { errorHandler, notFoundRoute } from './libs/routes';
import router from './router';

// console.log(bodyParser);
class Server {
    private app: express.Express;
    constructor(private config) {
        this.app = express();
    }
    public bootstrap() {
        this.initBodyParser();
        this.setUpRoute();
        return this;
    }
    public initBodyParser() {
        const { app } = this;
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
    }
    public setUpRoute() {
        const { app } = this;
        app.use('/health-check', (req, res) => {
            res.send('hi welcome');
        });
        // app.get("/favicon.ico", (req, res) => res.status(204));
        app.use(cors());
        app.use('/api', router);
        app.use(notFoundRoute);
        app.use(errorHandler);
    }
    public async run() {
        try {
            const { app, config: { port, mongoUrl } } = this;
            const value: object = await Database.open(mongoUrl);
            app.listen(port, (err) => {
                            if (err) { throw err; }
                            console.log(`App is running ${port}`);
                    });
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}
export default Server;
