const { Schema, model } = require('mongoose');

const userMode = new Schema({
    name: {
        type:String
    },
    email: {
        type:String
    },
    profile_img: {
        type:String
    }
}, {
    timestamps:true
});

const User = model('User', userMode);

module.exports = User