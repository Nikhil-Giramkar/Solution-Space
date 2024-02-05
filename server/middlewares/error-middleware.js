const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || "Backend Issue"
    const extraDetails = err.extraDetails || "Some error in backend, please check!"
    console.log("error middleware called")
    return res
            .status(status)
            .json({message, extraDetails})

};

module.exports = errorMiddleware;