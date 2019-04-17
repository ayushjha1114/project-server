import { NextFunction, Request, Response } from 'express';
import { successHandler } from '../../libs/routes';
import { IUserModel } from '../../repositories/user/IUserModel';
import UserRepository from './../../repositories/user/UserRepository';
class OrderController {
    // public async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    //     try {
    //         const { email } = req.query;
    //         const fetched: IUserModel = await UserRepository.userFindOne({role: 'user', email});
    //         const data: object = {
    //                 documents: fetched,
    //             };
    //         res.status(200).send(
    //                 successHandler("It's get request", data, 200),
    //             );
    //     } catch (err) {
    //         console.log(err);
    //         next({
    //             error : err,
    //         });
    //     }
    // }
    public async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { skip = 0, limit = 10 } = req.query;
            const page: number =  await UserRepository.userCount();
            const fetched: IUserModel[] = await UserRepository.userFindAll({role: 'user'}, skip, limit);
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
}
export default new OrderController();
