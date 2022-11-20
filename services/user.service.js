const User = require("../models/user")

exports.createUserService = async(data) => {
    const user = await User.create(data);
    console.log(user)
    return user;
}