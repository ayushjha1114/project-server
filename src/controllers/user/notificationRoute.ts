import * as bcrypt from 'bcrypt';
import * as express from 'express';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import { successHandler, validateHandler } from '../../libs/routes';
import { IUserModel } from '../../repositories/user/IUserModel';
import UserRepository from '../../repositories/user/UserRepository';

const notificationRouter = express.Router();

notificationRouter
    .get('/', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { skip = 0, limit = 10 } = req.query;
            const page: number =  await UserRepository.userOrderCount({approved: false});
            const fetched: IUserModel[] = await UserRepository.userFindAll(
                {role: 'user', approved: false}, skip, limit);
            const data: object = {
                    NumberOfOrders: page,
                    documents: fetched,
                };
            res.status(200).send(
                    successHandler("It's get request", data, 200),
                );
        } catch (err) {
            console.log(err);
            next({
                error : err,
            });
        }
    },
);
export default notificationRouter;
