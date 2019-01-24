import * as express from "express";
import { traineeRouter } from "./controllers/trainee";
const router = express.Router();

router.use("/trainee", traineeRouter);
// router.use('/trainee', (req, res) => {
//     console.log("trainee");
//     res.send("welcome trainee");
// });
router.use("/user", (req, res) => {
    console.log("user");
    res.send("welcome user");
});
export default router;
