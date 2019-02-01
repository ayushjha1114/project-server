// import { GetUsers  } from './constants';

export interface IPermission {
    [user: string]: {
        // To define type of left value
        all: string[];
        read: string[];
        write: string[];
        delete: string[];
    };
}
export interface IUsers {
    traineeEmail: string;
    reviewerEmail: string;
}
