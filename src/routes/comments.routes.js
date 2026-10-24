const express = require('express');
const router = express.Router();
const {
    getAllComments,
    getCommentsById,
    createcomment,
    updateComment,
    deleteComment

} = require('../controllers/comments.controller');

router.route('/')
    .get(getAllComments)
    .post(createcomment);

router.route('/:id')
    .get(getCommentsById)
    .patch(updateComment)
    .delete(deleteComment);

module.exports = router;