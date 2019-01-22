import { permissions } from "../constants";
export default function hasPermission(
    moduleName: string,
    role: string,
    permissionType: string
): void {
    console.log(Object.keys(permissions));
    if (permissions.hasOwnProperty(moduleName)) {
        //console.log('inside module')
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
