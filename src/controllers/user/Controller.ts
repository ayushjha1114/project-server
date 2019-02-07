import { Request, Response } from 'express';
import { successHandler } from '../../libs/routes';
import UserRepository from './../../repositories/user/UserRepository';
class ControllerTrainee {
    // private constructor(){};
    public async get(req: Request, res: Response, next) {
        try {
            console.log('Query is', req.query);
            const { skip, limit } = req.query;
            // const a = (req.query).toJSON;
            console.log('skip..>>>>>>>>>>>>>>>>>', typeof skip, typeof limit);
            const page =  await UserRepository.userCount();
            console.log(page);
            const fetched = await UserRepository.userFindAll({role: 'trainee'}, skip, limit);
            console.log('1????????????????????????????', fetched);
            const data = {
                    documents: fetched,
                    totalNumberOfDocs: page,
                };
            console.log('user');
            res.status(200).send(
                    successHandler("It's get request", data, 200),
                );
        } catch (err) {
            console.log(err);
            next({
                error : err,
            });
        }
    }
    public async create(req: Request, res: Response, next) {
        try {
            const { password, email } = req.body;
            console.log('request body', req.body);
            const data = req.body;

            const result = await UserRepository.userCreate(req.body);
            res.status(201).send(
                    successHandler("It's post request", data, 201),
                );
        } catch (err) {
            console.log(err);
            next({
                error : err,
                message: 'error occurred',
            });
        }
    }
    public async modify(req: Request, res: Response, next) {
        try {
            const { dataToUpdate , id} = req.body;
            const data = {
                Id: id,
                updatedData: dataToUpdate,
            };
            const result = await UserRepository.userUpdate(dataToUpdate, id);
            res.status(201).send(
                    successHandler('Given data is updated', data, 200),
                );
        } catch (err) {
            console.log(err);
            next({
                error : err,
            });
        }
    }
    public async delete(req: Request, res: Response, next) {
        try {
            const { id } = req.params;
            console.log('in controller delete');
            const result = await UserRepository.userDelete(req.params);
            res.status(202).send(
                    successHandler('Data is deleted', id, 202),
                );
        } catch (err) {
            console.log(err);
            next({
                error : err,
            });
        }
    }
}
export default new ControllerTrainee();
