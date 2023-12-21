const User = require("../model/user.model");
const customError = require("../utils/error");
const { getAuth } = require("firebase-admin/auth");
const formattedData = require("../utils/formattedData");



const googleAuth = async (req, res, next) => {
    const { accessToken } = req.body;

    try {
        const decodeduser = await getAuth().verifyIdToken(accessToken);

        const { name, picture, email } = decodeduser;
        const newPicture = picture.replace("s96-c", "s384-c");

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            res.status(200).json(formattedData(existingUser));
        } else {
            const user = new User({
                name,
                email,
                profile_img: newPicture,
            });
            
            await user.save();

            res.status(200).json(formattedData(user));
        }
    } catch (err) {
        next(customError(500, "user creation failed"));
    }
};

module.exports = {
    googleAuth,
};
