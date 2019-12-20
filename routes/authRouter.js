const express= require('express')
const authRouter = express.Router()
const User = require('../models/user.js') 
const jwt = require("jsonwebtoken")
const mongoose = require('mongoose'); mongoose.set('useCreateIndex', true);

// SIGNUPPPPPP>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
authRouter.post("/signup", (req, res, next) => {
    User.findOne({username: req.body.username}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }

        if(user !== null) {
            res.status(400)
            return next(new Error("That username is already taken"))
        }


        const newUser = new User(req.body)

        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            
            }

            const token = jwt.sign(savedUser.toObject(), process.env.SECRET)

            return res.status(201).send({user: savedUser.toObject(), token})
        })

    })

})




// LOGIN>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

authRouter.post("/login", (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }

        if(!user){
            res.status(401)
            return next(new Error("Username or Password is incorrect"))
        }

        if(user.password !== req.body.password){
            res.status(401)
            return next(new Error("Username or Password is incorrect"))
        }

        const token = jwt.sign(user.toObject(), process.env.SECRET)

        return res.status(200).send({user: user.toObject(), token})
    })
})













module.exports = authRouter