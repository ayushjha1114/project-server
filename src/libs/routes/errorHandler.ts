export default function errorHandler(err, req, res, next) {
    console.log("Inside Error function");
    res.send({
        error: "Not Found",
        message: "error",
        status: 500, // 500 is internal server error
        timestamp: new Date()
        //timestamp: JSON.stringify(new Date())
    });
    //console.log(JSON.stringify(new Date()));
    //res.status(500);
}
