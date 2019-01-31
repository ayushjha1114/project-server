import * as express from "express";
import { traineeRouter } from "./controllers/trainee";
import { userRouter } from "./controllers/user";
const router = express.Router();

router.use("/trainee", traineeRouter);
// router.use('/trainee', (req, res) => {
//     console.log("trainee");
//     res.send("welcome trainee");
// });
router.use("/user", userRouter);
export default router;
