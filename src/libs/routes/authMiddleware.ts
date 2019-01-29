//import { config } from "dotenv";
import * as jwt from "jsonwebtoken";
import hasPermission from "./hasPermissions";
export default function authMiddleware(module, permissionType) {
    return (req, res, next) => {
        const token = req.headers["authorization"];
        console.log(token);
        const decoded = jwt.verify(token, process.env.KEY, (err, res) => {
            if(err) {
                return false;
            }
            return res;
        });
      // const decoded = jwt.decode(token);
        console.log('DECODE:::::', decoded);
        if (!decoded) {
            next({
                error: "Unauthorized access",
                message: "User is unauthorized",
                status: 401
            });
        }
        const { role } = decoded;
        const result = hasPermission(module, role, permissionType);
        if (result == false) {
            next({
                error: "Unauthorized",
                message: "permission denied",
                status: 401
            });
        }
        next();
    };
}
