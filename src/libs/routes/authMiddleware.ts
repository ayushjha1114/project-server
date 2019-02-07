// import { config } from "dotenv";
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import UserRepository from '../../repositories/user/UserRepository';
import hasPermission from './hasPermissions';

export default function authMiddleware(module, permissionType) {
    return async (req, res, next) => {
        try {
            const token = req.headers.authorization;
            const { key } = config;
            let decoded;
            console.log(token);
            decoded = jwt.verify(token, key);
            const { role } = decoded;
            console.log('^^^^^^^^^^^', decoded);
            console.log('DECODE:::::', decoded.id);
            const decodedUser = await UserRepository.userFindOne({ originalID: decoded.id });
            console.log('%%%%%%%%%%%', decodedUser);
            if (!decoded) {
                next({
                    error: 'Unauthorized access',
                    message: 'User is unauthorized',
                    status: 401,
                });
            }
            const result = hasPermission(module, role, permissionType);
            if (result === false) {
                next({
                    error: 'Unauthorized',
                    message: 'permission denied',
                    status: 401,
                });
            }
            else {
                req.body.data = decodedUser.originalID;
                console.log('1234567', req.body.data);
                next();
            }
        } catch (error) {
            return next({
                error: error.message,
                message: error.message,
                status: 500,
            });
        }
    };
}
