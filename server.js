const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const {blogPosts} = require('./models');
const jsonParser = bodyParser.json();
const router = express.Router();
const app = express();

// log the http layer
app.use(morgan('common'));

// create some inital data
// fields: title, content, author, optional - publishDate
//
blogPosts.create({"title": "Adventures in Node programming",
                  "content": "CRUD operations relating to PUT, POST, GET and DELETE",
                  "author": "Dick Tracy",
                  "publishDate": "2017-06-25"});
blogPosts.create({"title": "How to win at Texas Hold-em",
                  "content": "Ignore the other players and always go all-in",
                  "author": "Sean Spicer",
                  "publishDate": "2017-06-25"});

app.get('/blog-posts', (req, res) => {
      res.json(blogPosts.get());
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
