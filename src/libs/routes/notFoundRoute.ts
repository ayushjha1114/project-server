export default function notFoundRoute(req, res, next) {
    console.log("Inside notFound function");
    //next();
    next({ error: "Not Found" });
}
