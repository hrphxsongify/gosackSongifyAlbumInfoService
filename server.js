const bodyParser = require('body-parser');

const express = require('express');

const app = express();

const Album = require('./data/database');

const PORT = 3002;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/albums', async (req, res) => {
  res.send(await Album.find({}).exec());
});

app.get('/albums/:albumId', async (req, res) => {
  res.send(await Album.findOne({ id: parseInt(req.params.albumId, 10) }).exec());
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
