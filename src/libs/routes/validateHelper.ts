import { NextFunction } from 'express';

export default (str, value, next: NextFunction  ) => {
    if (typeof str !== value) {
         return next({
            error: 'Not valid',
            message: `${str} is not string`,
            status: 404,
        });
    }
};
