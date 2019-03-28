const mongoose = require('mongoose')
let UserSchema = new mongoose.Schema(
    {
        fullname: String,
        email: String,
        username: String,
        password: String,
        phone:String
    }
);
module.exports = mongoose.model('User', UserSchema);