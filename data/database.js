const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/albums', {
  useNewUrlParser: true
});

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

const Album = mongoose.model('Album', albumSchema, 'albums');

module.exports = Album;

// Album.find({})
//   .then(data => console.log(data))
//   .catch(e => console.log(e));
