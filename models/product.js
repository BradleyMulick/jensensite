const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema ({

    title: {
        type: String,
        required: true
    },
    artist: String,
    price: String,
    location: String,
    _id: String,
    type: String,
    url: String

})


module.exports = mongoose.model("Product", productSchema)