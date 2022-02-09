const User = require('../models/UserModel')
const ErrorHandler = require('../utils/ErrorHandler')
const CatchAsyncError = require('../utils/CatchAsyncError')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'qwertyuiopasdf'
const JWT_EXPIRE = '4d'
const COOKIE_EXPIRE = 4


exports.register = CatchAsyncError(async(req,res,next)=>{
    
    const {name,email,password} = req.body
    
    const user = await User.create({
        name,
        email,
        password
    })

    const token = jwt.sign(
        {id:user._id},
        JWT_SECRET,
        {expiresIn:JWT_EXPIRE}
    )

    const options= {
        expires : new Date(Date.now() + COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly:true,
    }
    
    res.status(201).cookie('token',token,options).json({
        success:true,
        user
    })

})

exports.login = CatchAsyncError(async(req,res,next) => {
    const {email,password} = req.body

    if(!email || !password) {
        return next(new ErrorHandler("Invalid Email and Password",400))
    }

    const user = await  User.findOne({email})

    if(!user) {
        return next(new ErrorHandler("Invalid Email or Password",400))
    }

    const isMatch = await bcrypt.compare(password,user.password)

    if(!isMatch) {
        return next(new ErrorHandler("Invalid Email or Password",400))
    }

    const token = jwt.sign(
        {id:user.id},
        JWT_SECRET,
        {expiresIn:JWT_EXPIRE}
    )

    const options = {
        expires : new Date(Date.now() + COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly : true
    }

    res.status(200).cookie('token',token,options).json({
        success:true,
        user
    })

} 
)


exports.logout = CatchAsyncError(async(req,res,next)=>{
    res.cookie('token',null,{
        expires: new Date(Date.now()),
        httpOnly:true
    })
    res.status(201).json({
        success:true,
        message:"Logout is Successfull"
    })
})