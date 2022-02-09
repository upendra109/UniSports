const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
    heading:{
        type:String,
        required:[true,"Please Enter valid Heading"]
    },
    Date:{
        type:Date,
        required:[true,"Please Enter a valid Date"]
    },
    news_image:{
      type:String,
      required:[true,"please enter a proper url"]
    }
})

module.exports = mongoose.model('News',newsSchema)