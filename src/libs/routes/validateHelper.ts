export default (str, value, next  ) => {
    if (typeof str !== value) {
         return next({
            error: "Not valid",
            message: `${str} is not string`,
            status: 404
        });
    }
}
