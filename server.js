const bodyParser = require('body-parser');

const path = require('path');

const express = require('express');

const app = express();

const Album = require('./data/database');

const PORT = 3002;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('dist'));

app.get('/script', async (req, res) => {
  res.sendFile(await path.join(__dirname, 'dist/bundle.js'));
});

app.get('/albums', async (req, res) => {
  res.send(await Album.find({}).exec());
});

app.get('/api/albums/:albumId', async (req, res) => {
  res.send(await Album.findOne({ id: parseInt(req.params.albumId, 10) }).exec());
});

app.get('/albums/:albumId', (req, res) => {
  // send back html
  // const mypath = path.join(__dirname, 'dist/index.html');
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
