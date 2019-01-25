import * as express from "express";
import ControllerTrainee from "./Controller";
import { validateHandler } from "../../libs/routes";
import validConfigData from "./validate";
const traineeRouter = express.Router();
traineeRouter
    .get("/", validateHandler(validConfigData.get), ControllerTrainee.get)
    .post("/", validateHandler(validConfigData.create), ControllerTrainee.create)
    .put("/", validateHandler(validConfigData.update), ControllerTrainee.modify)
    .delete("/:id", validateHandler(validConfigData.delete), ControllerTrainee.delete);
// traineeRouter.get('/dsj', (req, res) => {
//     console.log("trainee");
//     res.send("welcome trainee");
// });


export default traineeRouter;
