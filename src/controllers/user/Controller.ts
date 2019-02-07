import { Request, Response } from 'express';
import { successHandler } from '../../libs/routes';
import UserRepository from './../../repositories/user/UserRepository';
class ControllerTrainee {
    // private constructor(){};
    public get(req: Request, res: Response) {
        UserRepository.userFind({email: req.body}).then((fetched) => {
        const { name, role, email, _id } = fetched;
        console.log('123456789345678', name, role, email);
        const data = {
            Email: email,
            ID: _id,
            Name: name,
            Role: role,
        };

        console.log('user');
        res.status(200).send(successHandler("It's get request", data, 200));

        });

    }
    public create(req: Request, res: Response, next) {
        console.log('trainee');
        const { name, role, email } = req.body.data;
        console.log('request body', req.body);
        console.log('asfdsgdfhgfjdsfgdsfhsfh', name, role, email);
        const data = [
            {
                name,
            },
        ];
        UserRepository.userCreate(req.body)
            .then(() => {
                res.status(201).send(successHandler("It's post request", data, 201));
            });
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
        UserRepository.userDelete(req.params)
            .then(() => {
            res.status(202).send(successHandler('Data is deleted', id, 202));
            });
    }
}
export default new ControllerTrainee();
