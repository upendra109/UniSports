const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter a valid name"]
    },
    price:{
        type:Number,
        required:[true,"please enter a valid price"]
    },
    rating:{
        type:Number,
        default:0
    },
    product_image:{
        type:String,
        required:[true,"please enter a proper url"]
    }
})

module.exports = mongoose.model('Product',productSchema)