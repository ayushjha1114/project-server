import { Request, Response } from "express";
export default function notFoundRoute(req: Request, res: Response, next) {
    console.log("Inside notFound function");
    //next();
    next({
        error: "Not Found",
        message: "error found in request",
        status: 404
    });
}
