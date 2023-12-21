const customError = require('../utils/error')
const jwt = require('jsonwebtoken')

const verifyUser = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) {
        return next(customError(401, "No Access Token Found"));
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user.id;
        return next();
    } catch (err) {
        return next(customError(401, "Invalid Access Token"));
    }
};

module.exports = verifyUser