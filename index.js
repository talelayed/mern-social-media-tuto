const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const posts = require('./routes/api/posts');
const profiles = require('./routes/api/profiles');
const users = require('./routes/api/users');

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect to MongoDB
mongoose
.connect(db)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err))

//Passport middleware 
app.use(passport.initialize());

//Passport Config
require('./config/passport')(passport);

//use Routes
app.use('/api/user', users);
app.use('/api/profile', profiles);
app.use('/api/post', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server listening on port ${port}`));