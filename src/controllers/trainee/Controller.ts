import { Request, Response } from "express";
import { successHandler } from "../../libs/routes";
class ControllerTrainee {
    //private constructor(){};
    get(req: Request, res: Response) {
        const data = [
            {
                name: "trainee1"
            },
            {
                name: "trainee2"
            }
        ];
        console.log("trainee");
        res.status(200).send(successHandler("It's get request", data, 200));
    }
    post(req: Request, res: Response, next) {
        console.log("trainee");
        const { name, id } = req.body;
        console.log("request body", req.body);
        console.log(name, id);
        const data = [
            {
                name: name,
                id: id
            }
        ];
        if (!name) {
            return next({
                error: "Not Found",
                message: "Name is not found",
                status: 404
            });
        }
        if (!id) {
            return next({
                error: "Not Found",
                message: "Id is not found",
                status: 404
            });
        } else
            res.status(201).send(
                successHandler("It's post request", data, 201)
            );
    }
    put(req: Request, res: Response, next) {
        console.log("trainee");
        const data = [
            {
                name: "trainee1"
            },
            {
                name: "trainee2"
            }
        ];
        res.status(200).send(
            successHandler("Given data is updated", data, 200)
        );
    }
    delete(req: Request, res: Response, next) {
        res.status(204).send(successHandler("Data is deleted", null, 204));
    }
}
export default new ControllerTrainee();
