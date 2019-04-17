import * as express from 'express';
import { NextFunction, Request, Response } from 'express';
import { successHandler, validateHandler } from '../../libs/routes';
import UserRepository from '../../repositories/user/UserRepository';
import validConfigData from './validate';

const approvedRouter = express.Router();

approvedRouter
    .put('/', validateHandler(validConfigData.update), async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { dataToUpdate , id} = req.body;
            const data: object = {
                Id: id,
                updatedData: dataToUpdate,
            };
            await UserRepository.userUpdate(dataToUpdate, id);
            res.status(201).send(
                    successHandler('Given data is updated', data, 201),
                );
        } catch (err) {
            console.log(err);
            next({
                error : err,
            });
        }
    });
export default approvedRouter;
