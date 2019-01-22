// import { users } from '../constants';
import validateEmail from "./helpers";

let valid = 0,
    invalid = 0;
export default function validateUsers(user) {
    user.forEach(function(input) {
        const { traineeEmail, reviewerEmail } = input; //destruct array object
        if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
            valid += 1;
        } else {
            invalid += 1;
        }
    });
    console.log(`valid emails are ${valid} and invalid emails are ${invalid}`);
}

// validateUsers(users);
