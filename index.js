// Access file paths
const path = require('path');

const express = require('express');
// Parse POST request body
const bodyParser = require('body-parser');

const routes = require('./routes/routes');

const app = express();
app.set('view engine', 'pug');

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
app.use((_req, res) => {
  res.status(404).render('404', { title: 'Page Not Found!'});
});

// App listens
app.listen(3000);
