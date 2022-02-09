const Ticket = require('../models/TicketModel')
const CatchAsyncError = require('../utils/CatchAsyncError')

exports.createTicket = CatchAsyncError(async(req,res,next) => {
    const ticket = await Ticket.create(req.body)
    res.status(201).json({success:true,ticket})
}) 

exports.all = CatchAsyncError(async(req,res,next) => {
    const tickets = await Ticket.find()
    res.status(201).json({success:true,tickets})
})



