const express = require('express');
const { getPost,
    deletePost,
    updatePost,
    getPosts,
    addPost
} = require('../controllers/api-post-controllers')
const router = express.Router();

// Add New Post
router.post('/api-v1/post', addPost);
// Update post by ID
router.put('/api-v1/post/:id', updatePost); //editPost
// Delete post By ID
router.delete('/api-v1/post/:id', deletePost);
// Get All posts
router.get('/api-v1/posts', getPosts);
// Get post by ID
router.get('/api-v1/post/:id', getPost);


module.exports = router;