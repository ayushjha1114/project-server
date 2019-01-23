import * as express from "express";

class Server {
    private app: express.Express;
    constructor(private config) {
        this.app = express();
        console.log("hi");
    }
    public bootstrap() {
        this.setUpRoute();
        return this;
    }
    public setUpRoute() {
        const { app } = this;
        app.use("/health-check", (req, res) => {
            res.send("hi welcome");
        });
    }
    public run() {
        const {
            app,
            config: { port }
        } = this;
        app.listen(port, err => {
            if (err) throw err;

            console.log(`App is running ${port}`);
        });
    }
}
export default Server;
