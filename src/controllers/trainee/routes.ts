import * as express from "express";
import ControllerTrainee from "./Controller";
const traineeRouter = express.Router();
traineeRouter
    .get("/", ControllerTrainee.get)
    .post("/", ControllerTrainee.post)
    .put("/", ControllerTrainee.put)
    .delete("/", ControllerTrainee.delete);
// traineeRouter.get('/dsj', (req, res) => {
//     console.log("trainee");
//     res.send("welcome trainee");
// });
export default traineeRouter;
