import successHandler from "./successHandler";
export default objData => (req, res, next) => {
    console.log("validate handler", req.body, req.params, req.query);
    const keys = Object.keys(objData);
    // console.log(Object.keys(objData));
    keys.forEach(key => {
        const item = objData[key];
        // console.log("asdasdasdadnawidjnawdn", item);
        const value = item.in.map(items => {
            // console.log("asdasfd", req[items][key]);
            return req[items][key];
        });
        if (item && item.required) {
            //It's used to check field is required or not
            const validatedValue = value.filter(function(item) {
                console.log("inside filter item", item);
                return item;
            });
            // console.log("wereser", validatedValue);
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
            const validatedValue = value.filter(item => item);
            validatedValue.forEach(element => {
                if (typeof element !== "string") {
                    next({
                        error: "Not valid",
                        message: `${key} is not string`,
                        status: 404
                    });
                }
            });
        }
        if (item.number) {
            const validatedValue = value.filter(item => item);
            validatedValue.forEach(element => {
                if (typeof element !== "number") {
                    next({
                        error: "Not valid",
                        message: `${key} is not number`,
                        status: 404
                    });
                }
            });
        }
        if (item.regex) {
            //It's check the regular expression of key-value pairs
            const validatedValue = value.filter(item => item);
            if (!item.regex.test(validatedValue)) {
                next({
                    error: "Not valid",
                    message: `${key} is not in format`,
                    status: 404
                });
            }
        }
        if (item.isObject) {
            const validatedValue = value.filter(item => item);
            validatedValue.forEach(element => {
                if (typeof element !== "object") {
                    next({
                        error: "Not valid",
                        message: `${key} is not object`,
                        status: 404
                    });
                }
            });
        }
        if (item.custom) {
            item.custom(3);
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
