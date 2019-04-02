import * as express from 'express';
import { validateHandler } from '../../libs/routes';
import { authMiddleware } from '../../libs/routes';
import ControllerTrainee from './Controller';
import validConfigData from './validate';
const traineeRouter = express.Router();
traineeRouter
    .get('/', authMiddleware('user', 'read'), validateHandler(validConfigData.get), ControllerTrainee.get)
    .post('/', authMiddleware('user', 'read'), validateHandler(validConfigData.create), ControllerTrainee.get)
    .put('/', authMiddleware('user', 'read'), validateHandler(validConfigData.update), ControllerTrainee.modify)
    .delete('/:id', authMiddleware('user', 'read'), validateHandler(validConfigData.delete), ControllerTrainee.delete);
/* traineeRouter.get('/dsj', (req, res) => {
    console.log("trainee");
    res.send("welcome trainee");
}); */

export default traineeRouter;
