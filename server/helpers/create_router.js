const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function(collection) {

<<<<<<< HEAD
  const router = express.Router();

  router.get('/', (req, res) => {
    collection.find()
    .toArray()
    .then((docs) => res.json(docs))
  });

  router.get('/:id', (req, res) => {
    const id = ObjectID(req.params.id);
    collection.findOne({_id: id})
    .then((docs) => res.json(docs));
  });
=======
 const router = express.Router();

 router.get('/', (req, res) => {
   collection.find()
   .toArray()
   .then((docs) => res.json(docs))
 });

 router.get('/:id', (req, res) => {
   const id = ObjectID(req.params.id);
   collection.findOne({_id: id})
   .then((docs) => res.json(docs));
 });
>>>>>>> 0ce6c89859bb85db2bf1e9ada1a3d897558debe5



};

module.exports = createRouter;

