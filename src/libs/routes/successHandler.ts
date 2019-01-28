export default (message, data, status) => {
    return {
        message: message || "error",
        status: status || 200,
        data: data || "null",
        timestamp: new Date()
    };
};
