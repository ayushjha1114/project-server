import * as bcrypt from 'bcrypt';
import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import { successHandler, validateHandler } from '../../libs/routes';
import UserRepository from '../../repositories/user/UserRepository';
import validConfigData from './validate';

const tokenRouter = express.Router();

tokenRouter.post('/', validateHandler(validConfigData.create), async (req, res, next) => {
    console.log('trainee');
    try {
        const { email } = req.body;
        console.log('request body', req.body);
        const data = {
            Email: email,
            Password: req.body.password,
        };
        const fetched =  await UserRepository.userFind({ email: req.body.email });
        console.log('FETCHED:::::::::::::', fetched.password, req.body.password);
        const { key } = config;
        const { password } = fetched;
        if (!fetched) {
                next({
                    error: 'INVALID EMAIL ',
                    message: 'email is wrong',
                    status: 500,
                });
            }
        if (bcrypt.compareSync(req.body.password, password)) {
                console.log('inside compare');
                const token = jwt.sign({
                    fetched,
                  }, key , { expiresIn: 15 * 60 });
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
