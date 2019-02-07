const validateConfig = {
    create: {
        // id: {
        //     required: true,
        //     string: true,
        //     regex: /^[0-9]*$/,
        //     in: ["body"],
        //     errorMessage: "Id is required"
        // },
        name: {
            errorMessage: 'Name is required',
            in: ['body'],
            regex: /^[a-zA-Z0-9]*$/,
            required: true,
            string: true,
            custom(value, next) {
                if (Array.isArray(value)) {
                    console.log('Great!!! It is an array');
                }
                console.log('Array value', value);
                // value.forEach(element => {
                //     if (!this.regex.test(element)) {
                //         return next({
                //             error: "Not valid",
                //             message: `${element} is not in format`,
                //             status: 500
                //         });
                //     }
                // });

                // this.regex;
            },
        },
    },
    delete: {
        id: {
            errorMessage: 'Id is required',
            in: ['params'],
            required: false,
            string: true,
        },
    },
    get: {
        limit: {
            default: 10,
            errorMessage: 'Limit is invalid',
            in: ['query'],
            required: false,
            // number: true,
        },
        skip: {
            default: 0,
            errorMessage: 'Skip is invalid',
            in: ['query'],
            required: false,
            // number: true,
        },
    },
    update: {
        dataToUpdate: {
            in: ['body'],
            isObject: true,
            required: true,
            custom(dataToUpdate) { return true; },
        },
        id: {
            errorMessage: 'Id is required',
            in: ['body'],
            required: true,
            string: true,
        },
    },
};

export default validateConfig;
