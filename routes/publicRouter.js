const express = require("express")
const publicRouter = express.Router()
const Post = require("../models/post.js")


publicRouter.get("/", (req, res, next) => {
    Post.find((err, posts) => {
        if(err){
            res.status(500)
            return next(err)
        } 
        return res.status(200).send(posts)
    })
})

module.exports = publicRouter