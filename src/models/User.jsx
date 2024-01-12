const mongoose = require('mongoose')

const User = mongoose.model('User', {
    userName: String,
    fullName: String,
    password: String,
    age: Number,
    access: String,
    position: String,
    email: String,
    linkedin: String,
    github: String,
    gender: String,
    nationality: String,
    address: String,
    hiringDate: Date,
    maritalStatus: Boolean,
    status: String,
    storeLocation: String,
})

module.exports = User