import { permissions, head, trainee, trainer } from "../constants";
export default function hasPermission(moduleName, role, permissionType) {
    if (permissions.hasOwnProperty(moduleName)) {
        if (permissions[moduleName]["all"].includes(role)) {
            console.log("true");
        } else {
            console.log(permissions[moduleName][permissionType].includes(role));
        }
    } else {
        console.log("false");
    }
}
// hasPermission( 'getUsers','head-trainer', 'read');
// hasPermission( 'getUsers1','trainer', 'write');
// hasPermission( 'getUsers5','trainer', 'delete');
