const mongoose = require('mongoose')

const ReserveSchema = new mongoose.Schema({
    date: String,
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    house: {
        type: mongoose.Schema.ObjectId,
        ref: 'House'
    }
})

module.exports = mongoose.model('Reserve', ReserveSchema)