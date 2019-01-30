//import { config } from "dotenv";
import * as jwt from "jsonwebtoken";
import hasPermission from "./hasPermissions";
import config from "../../config/configuration";

export default function authMiddleware(module, permissionType) {
    return (req, res, next) => {
        const token = req.headers["authorization"];
        const { key } = config
        let decoded;
        console.log(token);
        try {
            decoded = jwt.verify(token, key);
        } catch (error) {
            return next({
                error: error.message,
                message: error.message,
                status: 500
            });
        }
        // const decoded = jwt.decode(token);
        console.log("DECODE:::::", decoded);
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
