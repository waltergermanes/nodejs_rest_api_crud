const { statusCode } = require('../constants/statusConst')
const errorHandler = (err, req, res, next)=>{
    const status = res.statusCode ? res.statusCode  : 500
    switch (status) {
        case statusCode.BAD_REQUEST:
            res.json({ 
                  title: "BAD REQUEST",
                  message: err.message,
                  stackTrace: err.stack
                })
        case statusCode.ANAUTHORIZED:
            res.json({ 
                    title: "ANAUTHORIZED",
                    message: err.message,
                    stackTrace: err.stack
                    })
        case statusCode.FORBIDDEN:
            res.json({ 
                    title: "FORBIDDEN",
                    message: err.message,
                    stackTrace: err.stack
                    })
        case statusCode.NOT_FOUND:
            res.json({ 
                    title: "NOT_FOUND",
                    message: err.message,
                    stackTrace: err.stack
                    })
        case statusCode.SERVICE_ERROR:
            res.json({ 
                    title: "INTERNAL SERVICE ERROR",
                    message: err.message,
                    stackTrace: err.stack
                    })
        default:
       console.log("OK")
    }
   
}
module.exports = errorHandler