const { status } = require('express/lib/response');
const Post = require('../models/post')


const handleError = (res, error) =>{
    res.status(500).send(error.message);
};

// API
const getPost = (req, res) =>{
    Post
    .findById(req.params.id)
    .then((post) => res.status(200).json(post))
    .catch((error) => handleError(res, error));
};

// API
const deletePost = (req, res) => {
    Post
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json(req.params.id))
    .catch((error) => handleError(res, error));
};

// PAI
const updatePost = (req, res)=>{
    const { title, author, text } = req.body;
    const {id} = req.params;
    Post
    .findByIdAndUpdate(id, {title, author, text}, {new: true})
    .then((post) => res.status(200).json(post))
    .catch((error) => handleError(res, error));
};

 // API
const getPosts = (req, res) =>{
    Post
        .find()
        .sort({updatedAt: -1})
        .then((posts) => res.status(200).json(posts))
        .catch((error) =>handleError(res, error));
}


// API
const addPost = (req, res)=>{
    const { title, author, text } = req.body;
    const post = new Post({ title, author, text });
    post
        .save()
        .then((post) => res.status(200).json(post))
        .catch((error) => handleError(res, error));
};

module.exports = {
    getPost,
    deletePost,
    updatePost,
    getPosts,
    addPost
};