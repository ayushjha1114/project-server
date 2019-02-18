import { NextFunction, Request, Response } from 'express';
import { successHandler } from '../../libs/routes';
import { IUserModel } from '../../repositories/user/IUserModel';
import UserRepository from './../../repositories/user/UserRepository';
class ControllerTrainee {
    public async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { skip = 0, limit = 10 } = req.query;
            const page: number =  await UserRepository.userCount();
            const fetched: IUserModel[] = await UserRepository.userFindAll({role: 'trainee'}, skip, limit);
            const data: object = {
                    documents: fetched,
                    totalNumberOfDocs: page,
                };
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
    public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const data: object = req.body;
            const result: IUserModel = await UserRepository.userCreate(req.body);
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
    public async modify(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { dataToUpdate , id} = req.body;
            const data: object = {
                Id: id,
                updatedData: dataToUpdate,
            };
            await UserRepository.userUpdate(dataToUpdate, id);
            res.status(201).send(
                    successHandler('Given data is updated', data, 201),
                );
        } catch (err) {
            console.log(err);
            next({
                error : err,
            });
        }
    }
    public async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            const result = await UserRepository.userDelete(req.params);
            res.status(200).send(
                    successHandler('Data is deleted', id, 200),
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
