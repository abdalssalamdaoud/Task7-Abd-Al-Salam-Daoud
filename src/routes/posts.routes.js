const express = require('express');
const router = express.Router();

const postsController = require('../controllers/posts.controller');


router.route('/')
    .get(postsController.getPosts)
    .post(postsController.createpost);

router.route('/:id')
    .get(postsController.getPostById)
    .patch(postsController.updatePost)
    .delete(postsController.deletePost);

module.exports = router;