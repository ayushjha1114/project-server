import * as express from "express";
import ControllerTrainee from "./Controller";
import { validateHandler } from "../../libs/routes";
import {authMiddleware} from "../../libs/routes";
import validConfigData from "./validate";
const userRouter = express.Router();

userRouter
    .get("/",authMiddleware('user1', 'read'), validateHandler(validConfigData.create), ControllerTrainee.get)
    .post('/', authMiddleware("user1", "read"), validateHandler(validConfigData.create), ControllerTrainee.create)
    .put("/",authMiddleware("user1", "read"), validateHandler(validConfigData.update), ControllerTrainee.modify)
    .delete("/:id",authMiddleware("user1", "read"), validateHandler(validConfigData.delete), ControllerTrainee.delete);


    // userRouter.get('/dsj', (req, res) => {
//     console.log("trainee");
//     res.send("welcome trainee");
// });

export default userRouter;
