const globalErrors = (err, req, res, next) => {
    const errorStatus = err.statusCode || 500;
    const errorMessage = err.message || "Something went wrong";

    res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
    });
};

module.exports = globalErrors;
