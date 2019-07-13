// import { Router } from 'express';

const mongoose = require('mongoose');

// const router = Router();

// connect to database
const connect = () => {
  return mongoose.connect('mongodb://localhost:27017/albums');
};

// const connection = mongoose.createConnection('mongodb://localhost:27017/albums', {
//   useNewUrlParser: true
// });

// connection.useDb('albums');

// const Album = connection.model('albums');

// schema
//

// create schema
const albumSchema = new mongoose.Schema({
  albumId: Number,
  albumArtId: Number,
  albumTitle: {
    type: String,
    required: true
  },
  songs: {},
  yearCreated: Number,
  genre: String
});

// // returns a mongo model - model, schema
const Album = mongoose.model('Album', albumSchema, 'albums');

connect()
  .then(async connection => {
    await mongoose.connection.db;
  })
  .catch(e => console.error(e));

module.exports = Album;
