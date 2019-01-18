import { diamond, equil } from "./patterns";
import { hasPermission, validateUsers } from "./utils";

hasPermission("getUsers1", "trainer", "write");

diamond(5);
equil(10);
const users = [
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
validateUsers(users);
