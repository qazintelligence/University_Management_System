const User = require("../models/User");

async function getUserByEmail(email) {
    return await User.findOne({ email });
}

async function createUser(data) {
    const user = new User(data);
    return await user.save();
}

async function getUserById(id) {
    return await User.findById(id);
}

module.exports = {
    getUserByEmail,
    createUser,
    getUserById,
};
