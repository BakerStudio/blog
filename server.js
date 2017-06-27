const express = require('express');
const blogPostsRouter = require('./blogPostsRouter');
const morgan = require('morgan');

const app = express();

function runServer() {
    const port = process.env.PORT || 8080
    return new Promise((resolve, reject) => {
        server = app.listen(port, () => {
            console.log(`Your app is listening on port ${port}`)
            resolve(server)
                }).on('error', err => {
                reject(err)
            })
    })
}

// like `runServer`, this function also needs to return a promise.
// `server.close` does not return a promise on its own, so we manually
// create one.
function closeServer() {
  return new Promise((resolve, reject) => {
    console.log('Closing server')
    server.close(err => {
      if (err) {
        reject(err)
        // so we don't also call `resolve()`
        return
      }
      resolve()
    })
  })
}

app.use(morgan('common'));

app.use('/blog-posts', blogPostsRouter);

// app.listen(process.env.PORT || 8080, () => {
//   console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
// });
if (require.main === module) {
    runServer().catch(err => console.error(err))
}

module.exports = {
    app,
    runServer,
    closeServer
}
