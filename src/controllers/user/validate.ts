const validateConfig = {
    create: {
        email: {
            errorMessage: 'email is required',
            in: ['body'],
            regex: /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(rkgit)\.edu$/,
            required: true,
            string: true,
        },
        password: {
            errorMessage: 'password is required',
            in: ['body'],
            regex: /^[a-zA-Z0-9]*$/,
            required: true,
            string: true,
        },
      /*   name: {
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
            },
        }, */
    },
    delete: {
        id: {
            errorMessage: 'Id is required',
            in: ['params'],
            required: true,
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
        },
        id: {
            errorMessage: 'Id is required',
            in: ['body'],
            required: false,
            string: true,
        },
    },
};

export default validateConfig;
