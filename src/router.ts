import * as express from 'express';
import { approvedRouter, notificationRouter, orderRouter, tokenRouter, userRouter } from './controllers/user';
const router: express.Router = express.Router();

router.use('/user', userRouter);
router.use('/token', tokenRouter);
router.use('/order', orderRouter);
router.use('/notify', notificationRouter);
router.use('/approved', approvedRouter);

export default router;
