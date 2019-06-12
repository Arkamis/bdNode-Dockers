const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./db/mongoose');

const app = express();
const router = require('./routes/index');
const routerQuery = require('./routes/queries');


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index');
    
});

app.post('/item/add', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.redirect('/'));
});

app.use('/', router);
app.use('/', routerQuery);

const port = 3000;

app.listen(port, () => console.log('Server running...'));
