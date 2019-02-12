import * as bcrypt from 'bcrypt';
import config from '../config/configuration';
import UserRepository from './../repositories/user/UserRepository';
// We use this seed file to create a super user at bootstrapping time of app.
export const seedInitial = async () => {
    try {
        const { password } = config;
        const saltRounds = 10;
        const plainPassword = password;
        const hash = bcrypt.hashSync(plainPassword, saltRounds);
        console.log(hash);
        const result =  await UserRepository.userCount();
        if ( result === 0 ) {
            UserRepository.userCreate({
                email: 'head.trainer@successive.tech',
                name: 'Head-Trainer',
                password: hash,
                role: 'head-trainer',
            });
            UserRepository.userCreate({
                email: 'trainee@successive.tech',
                name: 'Trainee',
                password: hash,
                role: 'trainee',
            });
        }
    } catch (e) {
        console.log(e);
    }
    // UserRepository.userCount()
    //     .then((result) => {
    //         if ( result === 0 ) {
    //             UserRepository.userCreate({
    //                 email: 'head.trainer@successive.tech',
    //                 name: 'Head-Trainer',
    //                 password: hash,
    //                 role: 'head-trainer',
    //             });
    //             UserRepository.userCreate({
    //                 email: 'trainee@successive.tech',
    //                 name: 'Trainee',
    //                 password: hash,
    //                 role: 'trainee',
    //             });
    //         }
    // });
    // UserRepository.userCreate({
    //     email: 'ASD@successive.tech',
    //     name: 'ASFD',
    //     role: 'SEF',
    // });
    // UserRepository.userDelete({
    //     name: 'ayush',
    // });
    // UserRepository.userUpdate({
    //     name: 'afsdfsdg',
    // });
};
