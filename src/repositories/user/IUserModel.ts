import { IVersionableModel } from './../versionable/IVersionableModel';
export interface IUserModel extends IVersionableModel {
    // id: string;
    approved: boolean;
    email: string;
    name: string;
    password: string;
    role: string;
    complaint: string;
    city: string;
    address: string;
    zip: string;
    metal: number;
    plastic: number;
}

/* "husky": {
    "hooks": {
        "pre-commit": "npm test",
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
},

"pre-commit": "npm start",
"commitmsg": "commitlint -E GIT_PARAMS" */
