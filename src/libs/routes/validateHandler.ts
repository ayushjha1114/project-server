import successHandler from "./successHandler";
export default objData => (req, res, next) => {
    console.log("validate handler", req.body, req.params, req.query);
    const keys = Object.keys(objData);
    // console.log(Object.keys(objData));
    keys.forEach(key => {
        const item = objData[key];
        console.log("asdasdasdtrue adnawidjnawdn", item);
        const value = item.in.map(items => {
            // console.log("asdasfd", req[items][key]);
            return req[items][key];
        });
        const validatedValue = value.filter(item => item);
        console.log(" line 14",validatedValue[0]);
        if (item && item.required) {
            //It's used to check field is required or not
            if (validatedValue.length !== value.length) {
                next({
                    error: "Not Found",
                    message: objData[key].errorMessage || `${key} is required`,
                    status: 400
                });
            }
        }
        if (item.string) {
            // It's check the type of key-value pair is string or not
            if (typeof validatedValue[0] !== "string") {
                next({
                    error: "Not valid",
                    message: `${key} is not string`,
                    status: 404
                });
            }
        }
        if (item.number) {
            if (typeof validatedValue[0] !== "number") {
                next({
                    error: "Not valid",
                    message: `${key} is not number`,
                    status: 404
                });
            }
        }
        if (item.regex) {
            //It's check the regular expression of key-value pairs
            if (!item.regex.test(validatedValue[0])) {
                next({
                    error: "Not valid",
                    message: `${key} is not in format`,
                    status: 404
                });
            }
        }
        if (item.isObject) {
            if (typeof validatedValue[0] !== "object") {
                next({
                    error: "Not valid",
                    message: `${key} is not object`,
                    status: 404
                });
            }
        }
        if (item.custom) {
            if (req.body.name) {
                item.custom(validatedValue[0]);
            }
        }
    });
    next();
};

// export default function(objData) {
//     return function(req, res, next) {
//         console.log("validate handler", req.body, req.params, req.query);
//         next();
//     };
// }
