const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function(collection) {

  const router = express.Router();

  //index
  router.get('/', (req, res) => {
    collection
    .find().toArray()
    .then((docs) => res.json(docs));
  });
  //show
  router.get('/:id', (req, res) => {
    const id = ObjectID(req.params.id);
    collection.findOne({_id: id})
    .then((docs) => res.json(docs));
  });
  //delete
  router.delete('/:id', (req, res) => {
    const id = ObjectID(req.params.id);
    collection.deleteOne({_id: id})
    .then(() => collection.find().toArray())
    .then((docs) => res.json(docs))
  });

  router.post('/', (req, res) => {
    const newRecipe = req.body
    collection.insertOne(newRecipe)
    .then(() => collection.find().toArray())
    .then((docs) => res.json(docs))
  });

  return router;

};

module.exports = createRouter;
