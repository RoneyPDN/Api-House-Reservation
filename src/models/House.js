const mongoose = require('mongoose')

const HouseSchema = new mongoose.Schema({
    thumbnail: String,
    description: String,
    price: Number,
    location: String,
    status: Boolean,
    user:{
        type: mongoose.Schema.ObjectId,
        ref:'User'
    }
},{
    toJSON: {
        virtuals:true
    }
})
HouseSchema.virtual('thumnail_url').get(function(){
    return `http://localhost:3333/files/${this.thumbnail}`
})
module.exports = mongoose.model('House',HouseSchema)