const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const userRoutes = require('./routes/users.routes');
const postsRoutes = require('./routes/posts.routes');
const commentsRoutes = require('./routes/comments.routes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/posts', postsRoutes);
app.use('/api/v1/comments', commentsRoutes);

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => console.log("server is running"));