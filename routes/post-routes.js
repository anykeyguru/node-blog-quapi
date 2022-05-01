const express = require('express');
const { getPost,
    deletePost,
    getEditPost,
    updatePost,
    getPosts,
    getAddPost,
    addPost
} = require('../controllers/post-controllers')
const router = express.Router();

router.get('/posts/:id', getPost);
router.delete('/posts/:id', deletePost);
router.get('/edit/:id', getEditPost);
router.put('/edit/:id', updatePost); //editPost
router.get('/posts', getPosts);
router.get('/add-post', getAddPost);
router.post('/add-post', addPost);

module.exports = router;