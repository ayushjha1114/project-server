import successHandler from "./successHandler";
export default objData => (req, res, next) => {
    console.log("validate handler", req.body, req.params, req.query);

    if (objData.id.in == "body") {
        if (typeof(req.body.id)=='string'&& typeof(req.body.name)=='string') {
            if (objData.id.required && objData.name.required) {
                if (objData.id.string && objData.name.string) {
                    next();
                }
            }
        } else if (typeof(req.body.id)!='string') {
            return next({
                error: "Not Found",
                message: objData.id.errorMessage,
                status: 404
            });
        } else if (typeof(req.body.name)!='string') {
            return next({
                error: "Not Found",
                message: objData.name.errorMessage,
                status: 404
            });
        }
    } else if (objData.id.in == "params") {
        if (typeof(req.params.id)=='string') {
            if (objData.id.required) {
                if (objData.id.string) {
                    console.log("step 1")
                    next();
                }
            }
        } else if (typeof(req.params.id) != 'string') {
            return next({
                error: "Not Found",
                message: objData.id.errorMessage,
                status: 404
            });
        }
    } else if (objData.skip.in == "query") {
        if ((req.query)== { }) {
            if (!objData.id.required) {
                if (objData.id.string) {
                    console.log("step 1")
                    next();
                }
            }
        }
    }

    // next();
};

// export default function(objData) {
//     return function(req, res, next) {
//         console.log("validate handler", req.body, req.params, req.query);
//         next();
//     };
// }
