const mongoose = require('mongoose')

const Produto = mongoose.model('Produto', {
    name: String,
    cod: Number,
    img: String,
    price: Number,
    description: String,
    category: String,
    inEstoque: Boolean,
    NumEstoque: Number
})

module.exports = Produto