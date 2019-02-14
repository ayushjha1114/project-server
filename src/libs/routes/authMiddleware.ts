// import { config } from "dotenv";
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import { IUserModel } from '../../repositories/user/IUserModel';
import UserRepository from '../../repositories/user/UserRepository';
import hasPermission from './hasPermissions';

export default function authMiddleware(module, permissionType) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token: string = req.headers.authorization;
            const { key } = config;
            let decoded;
            decoded = jwt.verify(token, key);
            if (!decoded) {
                next({
                    error: 'Unauthorized access',
                    message: 'User is unauthorized',
                    status: 401,
                });
            }
            // tslint:disable-next-line:max-line-length
            const decodedUser = await UserRepository.userFindOne({ originalID: decoded.originalID, deletedAt: {$exists: false}}).lean();
            const result: boolean = hasPermission(module, decodedUser.role, permissionType);
            if (result === false) {
                next({
                    error: 'Unauthorized',
                    message: 'permission denied',
                    status: 401,
                });
            }
            else {
                req.body.data = decodedUser.originalID;
                next();
            }
        } catch (error) {
            console.log(error);
            return next({
                error: error.message,
                message: error.message,
                status: 500,
            });
        }
    };
}
