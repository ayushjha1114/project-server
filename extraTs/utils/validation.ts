import { IUsers } from './../interfaces';
// import { users } from '../constants';
import validateEmail from './helpers';

// tslint:disable-next-line:one-variable-per-declaration
let valid: number = 0,
    invalid: number = 0;
export default function validateUsers(user: IUsers[]): void {
    user.forEach((input: IUsers): void => {
        const { traineeEmail, reviewerEmail } = input; // destruct array object
        if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
            valid += 1;
        } else {
            invalid += 1;
        }
    });
    console.log(`valid emails are ${valid} and invalid emails are ${invalid}`);
}

// validateUsers(users);
