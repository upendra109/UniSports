const Product = require('../models/ProductModel')
const CatchAsyncError = require('../utils/CatchAsyncError')

exports.createProduct = CatchAsyncError(async(req,res,next)=>{
    const product = await Product.create(req.body)
    res.status(201).json({success:true,product})
})

exports.getAllProducts = CatchAsyncError(async(req,res,next) => {
    const products = await Product.find()
    res.status(201).json({success:true,products})
})

exports.hi = (req,res,next)=>{
    res.send('hi')
}