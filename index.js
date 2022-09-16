const express = require('express');
const mongoose = require('mongoose');


const posts = require('./routes/api/posts');
const profiles = require('./routes/api/profiles');
const users = require('./routes/api/users');

const app = express();

//DB config
const db = require('./config/keys').mongoURI;

//connect to MongoDB
mongoose
.connect(db)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err))

app.get('/', (req,res) => res.send("hello developer !"));

//use Routes
app.use('/api/users', users);
app.use('/api/profiles', profiles);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server listening on port ${port}`));