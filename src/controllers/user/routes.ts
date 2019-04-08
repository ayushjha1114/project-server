import * as express from 'express';
import { validateHandler } from '../../libs/routes';
import { authMiddleware } from '../../libs/routes';
import ControllerTrainee from './Controller';
import validConfigData from './validate';
const userRouter = express.Router();

userRouter
    .get('/', authMiddleware('users', 'read'), validateHandler(validConfigData.get), ControllerTrainee.get)
    .post('/', authMiddleware('users', 'read'), validateHandler(validConfigData.create), ControllerTrainee.create)
    .put('/', authMiddleware('users', 'read'), validateHandler(validConfigData.update), ControllerTrainee.modify)
    .delete('/:id', authMiddleware('users', 'read'), validateHandler(validConfigData.delete), ControllerTrainee.delete);

export default userRouter;
