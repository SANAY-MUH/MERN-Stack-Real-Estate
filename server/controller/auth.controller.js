import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { errorHandler } from '../utilities/error.js'
import jwt from 'jsonwebtoken'

export const signup = async (req, res, next) => {
    const {username, email, password} = req.body
    const hashedPassword = bcrypt.hashSync(password, 10)
    const newUser = new User({username, email, password: hashedPassword})
    
    try{
    await newUser.save()
    res.status(201).json('User created Successfully!')
    } catch (error){
        next(errorHandler(500, error.message))
    }
}

export const signin = async (req, res, next) => {
    const {email, password} = req.body
    try{
    const validUser = await User.findOne({email})
    if(!validUser) return next(errorHandler(404, 'User not found!'))
    const validPassword = bcrypt.compareSync(password, validUser.password)
    if(!validPassword) return next(errorHandler(401, 'Wrong credientials'))
    //JWT Token
    const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET)
    //Dont send hashed password to the user
    const {password: pass, ...rest} = validUser._doc //separating password and rest of the info. from the valid user
    res
    .cookie('access_token', token, {httpOnly: true})
    .status(200)
    .json(rest)
    }
    catch(error){
        next(error)
    }
}