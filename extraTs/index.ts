import { IUsers } from './interfaces';
import { diamond, equilateral } from "./patterns";
import { hasPermission, validateUsers } from "./utils";


hasPermission("GetUsers1234", "trainer", "write");
hasPermission( 'user1','trainer', 'read');
hasPermission( 'user1','head-trainer', 'delete');
hasPermission( 'ask123','trainer', 'delete');

diamond(5);
console.log('-------------------------------------');
equilateral(10);
console.log('-------------------------------------');
export const users: IUsers[] = [
    {
        traineeEmail: "trainee1@successive.tech",
        reviewerEmail: "reviewer1@successive.tech"
    },
    {
        traineeEmail: "trainee2@succedfdssive.tech",
        reviewerEmail: "reviewer2@successive.tech"
    },
    {
        traineeEmail: "trainee3@successive.tech",
        reviewerEmail: "reviewer3@successive.tech"
    },
    {
        traineeEmail: "trainee3@successive.tec",
        reviewerEmail: "reviewer3@successive.tech"
    }
];
//export { traineeEmail };
validateUsers(users);
