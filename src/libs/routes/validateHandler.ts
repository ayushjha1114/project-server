// import successHandler from "./successHandler";
import { NextFunction, Request, Response } from 'express';
import validateHelper from './validateHelper';

export default (objData) => (req: Request, res: Response, next: NextFunction) => {
    const keys = Object.keys(objData);
    keys.forEach((key) => {
        const item = objData[key];
        const value = item.in.map((items) => {
            return req[items][key];
        });
        const validatedValue = value.filter((element) => element);
        if (item && item.required) {
            // It's used to check field is required or not
            if (validatedValue.length !== value.length) {
                next({
                    error: 'Not Valid ',
                    message: objData[key].errorMessage || `${key} is required`,
                    status: 400,
                });
            }
        }
            // It's check the type of key-value pair is string or not
        if (item.string) {
                validateHelper(validatedValue[0], 'string', next);
        }

        if (item.number) {
            validateHelper(validatedValue[0], 'number', next);
        }
        if (item.regex) {
            // It's check the regular expression of key-value pairs
            if (!item.regex.test(validatedValue[0])) {
                next({
                    error: 'Not VALID',
                    message: `${key} is not in format`,
                    status: 404,
                });
            }
        }
        if (item.isObject) {
            validateHelper(validatedValue[0], 'object', next);
        }
       /*  if (item.custom) {
            if (req.body.name) {
                item.custom(validatedValue[0]);
            }
        } */
    });
    next();
};

/* export default function(objData) {
    return function(req, res, next) {
        console.log("validate handler", req.body, req.params, req.query);
        next();
    };
} */
