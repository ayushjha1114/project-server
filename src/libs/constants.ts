import { IPermission } from './interfaces';
// tslint:disable-next-line:one-variable-per-declaration
const head: string = 'head-trainer',
 trainee: string = 'trainee',
  trainer: string = 'trainer';
const permissions: IPermission = {

    GetUsers1234: {
        all: [head, trainee],
        delete: [],
        read: [trainee, trainer],
        write: [trainer],

    },
    ask123: {
        all: [head, trainee],
        delete: [],
        read: [trainee, trainer],
        write: [trainer],

    },
    user: {
        all: [head],
        delete: [],
        read: [trainee, trainer],
        write: [trainer],

    },
};

export { permissions, head, trainee, trainer };
