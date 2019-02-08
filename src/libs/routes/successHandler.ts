export default (message, data, status): object => {
    return {
        data: data || 'null',
        message: message || 'error',
        status: status || 200,
        timestamp: new Date(),
    };
};
