const mongoose = require('mongoose')

const Evento = mongoose.model('Evento', {
    nameEvent: String,
    typeEvent: String,
    description: String,
    dateEvent: Date,
    HourEvent: Number    
})

module.exports = Evento