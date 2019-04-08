import { NextFunction, Request, Response  } from 'express';
import { successHandler } from '../../libs/routes';
class ControllerTrainee {
    public get(req: Request, res: Response): void {
        const data: object = [
            {
                name: 'user1',
            },
            {
                name: 'user2',
            },
        ];
        res.status(200).send(successHandler("It's get request", data, 200));
    }
    public create(req: Request, res: Response, next: NextFunction): void {
        const { name, id } = req.body;
        const data: object = [
            {
                id,
                name,
            },
        ];
        res.status(201).send(successHandler("It's post request", data, 201));
    }
    public modify(req: Request, res: Response, next: NextFunction): void {
        const { dataToUpdate, id } = req.body;
        const data: object = [
            {
                id,
                updatedData: dataToUpdate,
            },
        ];
        res.status(200).send(
            successHandler('Given data is updated', data, 200),
        );
    }
    public delete(req: Request, res: Response, next: NextFunction): void {
        const { id } = req.params;
        res.status(202).send(successHandler('Data is deleted', id, 202));
    }
}
export default new ControllerTrainee();
