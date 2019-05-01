import * as bcrypt from 'bcrypt';
import * as express from 'express';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import { successHandler, validateHandler } from '../../libs/routes';
import UserRepository from '../../repositories/user/UserRepository';
import validConfigData from './validate';

const tokenRouter = express.Router();

tokenRouter
    .post('/', validateHandler(validConfigData.create), async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email } = req.body;
            const data: object = {
            Email: email,
            Password: req.body.password,
        };
            const fetched =  await UserRepository.userFindOne({ email: req.body.email, deletedAt: {$exists: false} });
            const { key } = config;
            const { password } = fetched;
            console.log(fetched.password, req.body.password, bcrypt.compareSync(req.body.password, password));
            if (!fetched) {
                next({
                    error: 'INVALID EMAIL ',
                    message: 'email is wrong',
                    status: 500,
                });
            }
            if (bcrypt.compareSync(req.body.password, password)) {
                console.log('fff');
                const token = jwt.sign({
                    originalID: fetched.originalID,
                  }, key , { expiresIn: 60 * 60 });
                console.log(token);
                res.status(201).send(
                    successHandler("It's post request with token", token, 201),
                );
            }
            else {
                next({
                    error: 'INVALID',
                    message: 'password is invalid',
                    status: 500,
                });
            }
        } catch (err) {
                console.log(err);
                next({
                    error: 'unauthorized ',
                    message: err.message,
                    status: 500,
                });
        }
});
export default tokenRouter;
