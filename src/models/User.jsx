const mongoose = require('mongoose')

const User = mongoose.model('User', {
    name: String,
    fullName: String,
    age: Number,
    email: String,
    password: String,
    position: String,
    nationality: String,
    gender: Boolean,
    hireDate: String,
    maritalStatus: Boolean,
    location: String
})

module.exports = User