const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/routes');

const app = express();
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
app.use((_req, res) => {
  res.status(404).render('404', { title: 'Page Not Found!' });
});

app.listen(process.env.PORT || 3000);
