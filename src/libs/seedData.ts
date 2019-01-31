import { UserRepository } from "./../repositories/user/UserRepository";
import * as mongoose from "mongoose";

// We use this seed file to create a super user at bootstrapping time of app.

export const seedInitial = () => {
    const UserRepo = new UserRepository();
    UserRepo.userCreate({
        name: "ayush"
    });
    UserRepo.userDelete({
        id: "1756334"
    });
};
