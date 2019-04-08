import { IPermission } from './interfaces';
// tslint:disable-next-line:one-variable-per-declaration
const head: string = 'admin',
 user: string = 'user',
  employee: string = 'employee';
const permissions: IPermission = {

    GetUsers1234: {
        all: [head, user],
        delete: [],
        read: [user, employee],
        write: [employee],

    },
    ask123: {
        all: [head, user],
        delete: [],
        read: [user, employee],
        write: [employee],

    },
    users: {
        all: [head],
        delete: [],
        read: [user, employee],
        write: [employee],

    },
};

export { permissions, head, user, employee };
