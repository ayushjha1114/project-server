import { IVersionableModel } from './../versionable/IVersionableModel';
export interface IUserModel extends IVersionableModel {
    // id: string;
    email: string;
    name: string;
    password: string;
    role: string;
}

// "husky": {
//     "hooks": {
//         "pre-commit": "npm test",
//         "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
//     }
// },

// "pre-commit": "npm start",
// "commitmsg": "commitlint -E GIT_PARAMS"
