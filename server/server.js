const express = require('express');
const app = express();
const path = require('path')
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');


const path = require('path');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');


const publicPath = path.join(__dirname, '../client/public');

app.use(express.static(publicPath));
app.use(parser.json());

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('food');
  const recipesCollection = db.collection('recipes');
  const recipesRouter = createRouter(recipesCollection);
  app.use('/api/recipes', recipesRouter);
}).catch(console.err);

app.listen(3000, function ()  {
  console.log(`Listening on the good old port of ${this.address().port}`);
});

