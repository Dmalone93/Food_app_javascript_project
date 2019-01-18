const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');

const publicPath = path.join(__dirname, '../client/public');

app.use(express.static(publicPath));
