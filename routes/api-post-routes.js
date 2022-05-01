const express = require('express');
const { getPost,
    deletePost,
    updatePost,
    getPosts,
    addPost
} = require('../controllers/api-post-controllers')
const router = express.Router();

// Add New Post
router.post('/api/post', addPost);
// Update post by ID
router.put('/api/post/:id', updatePost); //editPost
// Delete post By ID
router.delete('/api/post/:id', deletePost);
// Get All posts
router.get('/api/posts', getPosts);
// Get post by ID
router.get('/api/post/:id', getPost);


module.exports = router;