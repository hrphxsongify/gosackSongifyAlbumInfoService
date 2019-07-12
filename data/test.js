const mongoose = require('mongoose');

// connect to database
const connect = () => {
  return mongoose.connect('mongodb://localhost:27017/albums');
};

// create schema
const testAlbums = new mongoose.Schema({
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

// returns a mongo model - model, schema
const Album = mongoose.model('testAlbum', testAlbums);

connect()
  .then(async connection => {
    // create album
    const album = await Album.create({
      albumId: 001,
      albumArtId: 001,
      albumTitle: 'In Through the Out Door',
      songs: { 1: 'The Crunge' },
      yearCreated: 1975,
      genre: 'Rock'
    });
    console.log(album);
  })
  .catch(e => console.error(e));
