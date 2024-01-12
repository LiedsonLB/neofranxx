const mongoose = require('mongoose')

const Noticia = mongoose.model('Noticia', {
    title: String,
    img: String,
    auth: String,
    description: String,
    date: String
})

module.exports = Noticia