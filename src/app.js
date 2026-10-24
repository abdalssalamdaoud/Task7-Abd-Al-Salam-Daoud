const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const userRoutes = require('./routes/users.routes.js');
const postsRoutes = require('./routes/posts.routes.js');
const commentsRoutes = require('./routes/comments.routes.js');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/posts', postsRoutes);
app.use('/api/v1/comments', commentsRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on'));