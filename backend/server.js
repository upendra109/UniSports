const express = require('express')
const app = express()
const cors = require('cors')
const body_parser = require('body-parser')
const mongoose = require('mongoose')
const cookie_parser = require('cookie-parser')
const dotenv =require('dotenv')
const product = require('./Routes/ProductRoutes')
const user = require('./Routes/UserRoutes')
const news = require('./Routes/NewsRoutes')
const ticket = require('./Routes/TicketRoutes')

dotenv.config()

app.use(express.json())
app.use(cors())
app.use(cookie_parser())
app.use(body_parser.urlencoded({extended:true}))
app.use('/products',product)
app.use('/user',user)
app.use('/news',news)
app.use('/ticket',ticket)

mongoose.connect("mongodb+srv://Upendra:upendra@cluster0.vgids.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((data)=>{
    console.log("Mongo Database Connected")
}).catch((err)=>{ 
    console.log(err)
})

app.get('/',(req,res)=>{
    res.send('hi')
})

app.listen(1234,()=>{
    console.log("listening on the port 1234")
})



