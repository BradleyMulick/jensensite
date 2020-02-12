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


postRouter.get("/:postId", (req, res, next) => {

    // Addition: Change to findOne and include the search criteria for users
    Post.findOne({_id: req.params.postId, user: req.user._id}, (err, todo) => {
        if (err) {
            res.status(500);
            return next(err);
        };
        if (!post) {
            res.status(404);
            return next(new Error("No post item found."));
        };
        return res.send(post);
    });
});

postRouter.put("/:postId", (req, res, next) => {

    // Addition: Change to findOneAndUpdate and include the query for users
    Post.findOneAndUpdate(
        // Updated query to include user
        {_id: req.params.postId, user: req.user._id},
        req.body,
        {new: true},
        (err, post) => {
            if (err) {
                res.status(500)
                return next(err);
            };
            return res.send(post);
        }
    );
});

postRouter.delete("/:postId", (req, res, next) => {

    // Addition: Change to findOneAndRemove and include the search criteria for users
    Post.findOneAndRemove({_id: req.params.postId, user: req.user._id}, (err, post) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(post);
    });
});


module.exports = postRouter