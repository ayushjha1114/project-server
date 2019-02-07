export default (message, data, status) => {
    return {
        data: data || 'null',
        message: message || 'error',
        status: status || 200,
        timestamp: new Date(),
    };
};
