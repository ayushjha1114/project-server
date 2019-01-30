// import successHandler from "./successHandler";
import validateHelper from "./validateHelper";
export default objData => (req, res, next) => {
    console.log("validate handler", req.body, req.params, req.query);
    const keys = Object.keys(objData);
    // console.log(Object.keys(objData));
    keys.forEach(key => {
        const item = objData[key];
        //console.log("asdasdasdtrue adnawidjnawdn", item);
        const value = item.in.map(items => {
            console.log("asdasfd", req[items][key]);
            return req[items][key];
        });
        console.log(" line 14", value);
        const validatedValue = value.filter(item => item);
        console.log(" line 16", validatedValue);
        if (item && item.required) {
            //It's used to check field is required or not
            if (validatedValue.length !== value.length) {
                next({
                    error: "Not Valid ",
                    message: objData[key].errorMessage || `${key} is required`,
                    status: 400
                });
            }
        }
            // It's check the type of key-value pair is string or not
            if (item.string)
                validateHelper(validatedValue[0], "string", next);


        if (item.number) {
            validateHelper(validatedValue[0], "number", next);
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
            validateHelper(validatedValue[0], "object", next);
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
