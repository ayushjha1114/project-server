import * as express from 'express';
import { validateHandler } from '../../libs/routes';
import { authMiddleware } from '../../libs/routes';
import ControllerUser from './Controller';
import OrderController from './orderController';
import validConfigData from './validate';
const userRouter = express.Router();

userRouter
    .get('/', authMiddleware('users', 'read'), validateHandler(validConfigData.get), ControllerUser.get)
    .post('/', validateHandler(validConfigData.create), ControllerUser.create)
    .put('/', authMiddleware('users', 'read'), validateHandler(validConfigData.update), ControllerUser.modify)
    .delete('/:id', authMiddleware('users', 'read'), validateHandler(validConfigData.delete), ControllerUser.delete);

export const orderRouter = express.Router();

orderRouter
        .get('/', authMiddleware('users', 'read'), OrderController.get)
        .put('/', authMiddleware('users', 'read'), OrderController.modify);

export default userRouter;
