import * as bcrypt from 'bcrypt';
import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import { successHandler, validateHandler } from '../../libs/routes';
import UserRepository from '../../repositories/user/UserRepository';
import validConfigData from './validate';

const tokenRouter = express.Router();

tokenRouter.post('/', validateHandler(validConfigData.create), (req, res, next) => {
    console.log('trainee');
    try {
        const { email, userPassword } = req.body;
        console.log('request body', req.body);
        const data = {
            Email: email,
            Password: userPassword,
        };
        UserRepository.userFind({ email: req.body.email }).then((fetched) => {
            console.log('FETCHED:::::::::::::', fetched.password, userPassword);
            const { key } = config;
            const { password } = fetched;
            if (!fetched) {
                next({
                    error: 'INVALID EMAIL ',
                    message: 'email is wrong',
                    status: 500,
                });
            }
            // bcrypt.compare(pass, password, (err, result) => {
            //     if (err) {
            //         console.log(err);
            //     }
            //     else {
            //     console.log('token!!!!!!!!!!!!', result);
            //     }
            // });
            if (bcrypt.compareSync(userPassword, password)) {
                console.log('inside compare');
                const token = jwt.sign({
                    fetched,
                  }, 'secret', { expiresIn: 15 * 60 });
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
        });
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
