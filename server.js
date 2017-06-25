const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const {
  BlogPosts
} = require('./models');
const jsonParser = bodyParser.json();

const app = express();

// log the http layer
app.use(morgan('common'));

// create some inital data
// fields: title, content, author, optional - publishDate
//
BlogPosts.create(
  "Adventures in Node programming",
  "CRUD operations relating to PUT, POST, GET and DELETE",
  "Dick Tracy"
  );
BlogPosts.create(
  "How to win at Texas Hold-em",
  "Ignore the other players and always go all-in",
  "Sean Spicer"
  );

app.get('/blog-posts', (req, res) => {
  res.json(BlogPosts.get());
});

app.post('/blog-posts', jsonParser, (req, res) => {
  // validate title, content, author. PublishDate is optional so doesn't
  //     have to be validated.
  const requiredFields = ['title', 'content', 'author'];
  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`
      console.error(message);
      return res.status(400).send(message);
    }
  }
  //  TODO: handle optional publishDate if present
  const item = BlogPosts.create(req.body.title, req.body.content, req.body.author);
  res.status(201).json(item);
});

app.delete('/blog-posts/:id', (req, res) => {
  BlogPosts.delete(req.params.id);
  console.log(`Deleted blog entry for id \`${req.params.id}\``);
  res.status(204).end();
});

app.put('/blog-posts/:id', jsonParser, (req, res) => {
  const requiredFields = ['title', 'content', 'author'];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`
      console.error(message);
      return res.status(400).send(message);
    }
  }
  if (req.params.id !== req.body.id) {
    const message = `Request path id (${req.params.id}) and request body id (${req.body.id}) must match`;
    console.error(message);
    return res.status(400).send(message);
  }
  console.log(`Updating blog entry \`${req.params.id}\``);

  // TODO: handle the optional publishDate case
  BlogPosts.update({
    id: req.params.id,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  });
  res.status(204).end();
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
