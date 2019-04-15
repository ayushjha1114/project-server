import * as express from 'express';
import { traineeRouter } from './controllers/trainee';
import { approvedRouter, notificationRouter, orderRouter, tokenRouter, userRouter } from './controllers/user';
const router: express.Router = express.Router();

router.use('/trainee', traineeRouter);
/* router.use('/trainee', (req, res) => {
    console.log("trainee");
    res.send("welcome trainee");
}); */
router.use('/user', userRouter);
router.use('/token', tokenRouter);
router.use('/order', orderRouter);
router.use('/notify', notificationRouter);
router.use('/approved', approvedRouter);

export default router;
