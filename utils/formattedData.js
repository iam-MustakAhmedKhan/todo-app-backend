const jwt = require("jsonwebtoken");

const formattedData = (user) => {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    const { name, email, profile_img ,_id} = user;

    return {
        name,
        email,
        profile_img,
        accessToken: token,
        _id
    }
};

module.exports = formattedData