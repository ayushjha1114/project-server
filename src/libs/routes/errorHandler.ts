import { Request, Response } from 'express';
export default function errorHandler(err, req: Request, res: Response, next) {
    // console.log("Inside Error function");
    const { error, message, status } = err;
    res.status(status).json({
        error: error || 'Not Found',
        message: message || 'error',
        status: status || 500, // 500 is internal server error
        timestamp: new Date(),
        // timestamp: JSON.stringify(new Date())
    });
    // console.log(JSON.stringify(new Date()));
    // res.status(500);
}
