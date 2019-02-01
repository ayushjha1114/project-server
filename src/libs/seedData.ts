import * as mongoose from 'mongoose';
import { UserRepository } from './../repositories/user/UserRepository';

// We use this seed file to create a super user at bootstrapping time of app.

export const seedInitial = () => {
    const userRepository = new UserRepository();
    userRepository.userCreate({
        name: 'AYush',
    });
    // userRepository.userDelete({
    //     name: 'ayush',
    // });
    // userRepository.userUpdate({
    //     name: 'afsdfsdg',
    // });
};
