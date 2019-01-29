const validateConfig = {
    create: {
        id: {
            required: false,
            string: true,
            regex: /^[0-9]*$/,
            in: ["body"],
            errorMessage: "Id is required",
            custom: function(value) {
                console.log("Value", value);
                //throw { error: "Error Occurred", message: "Message", status: 400 };
            }
        },
        name: {
            required: true,
            string: true,
            regex: /^[a-zA-Z0-9]*$/,
            in: ["body"],
            errorMessage: "Name is required",
            custom: function( value) {
                if(Array.isArray(value)) {
                    console.log("Great!!! It is an array")
                }
                console.log("Value");
                //throw { error: "Error Occurred", message: "Message", status: 400 };
            }
        }
    },
    delete: {
        id: {
            required: false,
            string: true,
            errorMessage: "Id is required",
            in: ["params"]
        }
    },
    get: {
        skip: {
            required: false,
            default: 0,
            number: true,
            in: ["query"],
            errorMessage: "Skip is invalid"
        },
        limit: {
            required: false,
            default: 10,
            number: true,
            in: ["query"],
            errorMessage: "Limit is invalid"
        }
    },
    update: {
        id: {
            required: true,
            string: true,
            errorMessage: "Id is required",
            in: ["body"]
        },
        dataToUpdate: {
            in: ["body"],
            required: true,
            isObject: true,
            custom: function(dataToUpdate) {}
        }
    }
};

export default validateConfig;
