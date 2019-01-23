import { IPermission } from "./interfaces";
const head: string = "head-trainer",
    trainee: string = "trainee",
    trainer: string = "trainer";
const permissions: IPermission = {
    user1: {
        all: [head],
        read: [trainee, trainer],
        write: [trainer],
        delete: []
    },
    GetUsers1234: {
        all: [head, trainee],
        read: [trainee, trainer],
        write: [trainer],
        delete: []
    },
    ask123: {
        all: [head, trainee],
        read: [trainee, trainer],
        write: [trainer],
        delete: []
    }
};

export { permissions, head, trainee, trainer };
