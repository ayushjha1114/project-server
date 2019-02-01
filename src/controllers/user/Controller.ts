import { Request, Response } from 'express';
import { successHandler } from '../../libs/routes';
import { UserRepository } from './../../repositories/user/UserRepository';
class ControllerTrainee {
    // private constructor(){};
  public UserRepo = new UserRepository();
    public get(req: Request, res: Response) {
        const data = [
            {
                name: 'trainee1',
            },
            {
                name: 'trainee2',
            },
        ];
        console.log('trainee');
        res.status(200).send(successHandler("It's get request", data, 200));
    }
    public create(req: Request, res: Response, next) {
        console.log('trainee');
        const { name } = req.body;
        console.log('request body', req.body);
        console.log(name);
        const data = [
            {
                name,
            },
        ];
        this.UserRepo.userCreate(req.body);
        res.status(201).send(successHandler("It's post request", data, 201));
    }
    public modify(req: Request, res: Response, next) {
        console.log('trainee');
        const { dataToUpdate} = req.body;
        const data = [
            {
                updatedData: dataToUpdate,
            },
        ];
        res.status(200).send(
            successHandler('Given data is updated', data, 200),
        );
    }
    public delete(req: Request, res: Response, next) {
        const { id } = req.params;
        console.log('in controller delete');
        res.status(202).send(successHandler('Data is deleted', id, 202));
    }
}
export default new ControllerTrainee();
