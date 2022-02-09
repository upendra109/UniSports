const News = require('../models/NewsModel')
const CatchAsyncError = require('../utils/CatchAsyncError')

exports.createNews = CatchAsyncError(async(req,res,next)=>{
    const news = await News.create(req.body)
    res.status(201).json({success:true,news})
})

exports.getAllNews = CatchAsyncError(async(req,res,next)=>{
    const news = await News.find()
    res.status(201).json({success:true,news})
})