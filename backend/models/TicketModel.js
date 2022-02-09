const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,"please Enter a valid title"]
    },
    price:{
        type:Number,
        required:[true,"Please Enter a valid Price"]
    },
    Timing:{
        type:Number,
        required:[true,"please enter a valid timing"]
    },
    Date:{
        type:Date,
        required:[true,"please enter a valid date"]
    },
    SeatNumber:{
        type:Number,
        required:[true,"please enter a valid Seat Number"]
    },
    left_image:{
        type:String,
        required:[true,"please enter a valid url"]
    },
    right_image:{
        type:String,
        required:[true,"Please enter a valid url"]
    }
})

module.exports = mongoose.model('Ticket',ticketSchema)