const posts = require('../models/posts');

const getPosts = (req, res) => {
    const { tag } = req.query;
    let postTagged = posts;
    if (tag) {
        postTagged = posts.find(a => a.tags.includes(tag));
        if (!postTagged) {
            return res.status(404).json({ success: false, message: "post with this tag is not found" });
        }
        return res.status(200).json({ success: true, data: postTagged });
    }
    res.status(200).json({ success: true, data: postTagged });
};

const getPostById = (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(a => a.id === postId); 
        if (!post) {
        return res.status(404).json({ success: false, message: "post Not Found " });
    }
    res.status(200).json({ success: true, data: post });
};

const createpost = (req, res) => {
    const { id, userId, title, content, tag, likes } = req.body;
    let nothing = "";

    const newPost = {
        id: posts.length + 1,
        userId,
        title: title || nothing,
        content: content,
        tag: tag || nothing,
        likes: likes || 0, 
        createdAt: new Date().toString(),
        updateAt: new Date().toString()
    };

    posts.push(newPost);
    res.status(201).json({ success: true, data: newPost });
};

const updatePost = (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(a => a.id === postId); 
    
    if (!post) {
        return res.status(404).json({ success: false, message: "post Not Found " });
    }

    let { userId, title, content, tag, likes, updateAt } = req.body;
    let nothing = "";

    if (userId) post.userId = userId;
    if (title) post.title = title || nothing;
    if (content) post.content = content;
    if (tag) post.tag = tag || nothing;
    if (likes) post.likes = likes;
    post.updateAt = new Date().toString();

    res.status(200).json({ success: true, data: post });
};

const deletePost = (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(a => a.id === postId);

    if (postIndex === -1) {
        return res.status(404).json({ success: false, message: 'post not found' });
    }

    const deletedPost = posts.splice(postIndex, 1); 
    res.status(200).json({ success: true, data: deletedPost });
};

module.exports = {
    getPosts,
    getPostById,
    createpost,
    updatePost,
    deletePost
};