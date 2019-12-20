const express = require("express")
const postRouter = express.Router()
const Post = require("../models/post.js")


postRouter.get("/", (req, res, next) => {
    Post.find((err, posts) => {
        if(err){
            res.status(500)
            return next(err)
        } 
        return res.status(200).send(posts)
    })
})



// get user >>>>>>>>>>>>>>>>>>>>>>>>>


// POST>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
postRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id;
    const newPost = new Post(req.body);

    // Addition: include the user property to this new Todo item
    newPost.save((err, savedPost) => {
        if (err) {
            res.status(500);
            return next(err);
        };
        return res.status(201).send(savedPost);
    });
});


module.exports = postRouter