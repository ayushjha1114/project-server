import UserSchema from '../repositories/user/UserSchema';
import UserRepository from './../repositories/user/UserRepository';
// We use this seed file to create a super user at bootstrapping time of app.
export const seedInitial = () => {
    UserRepository.userCount()
        .then((result) => {
            if ( result === 0 ) {
                UserRepository.userCreate({
                    email: 'head.trainer@successive.tech',
                    name: 'Head-Trainer',
                    role: 'head-trainer',
                });
                UserRepository.userCreate({
                    email: 'trainee@successive.tech',
                    name: 'Trainee',
                    role: 'trainee',
                });
            }
    });
    // UserRepository.userDelete({
    //     name: 'ayush',
    // });
    // UserRepository.userUpdate({
    //     name: 'afsdfsdg',
    // });
};
