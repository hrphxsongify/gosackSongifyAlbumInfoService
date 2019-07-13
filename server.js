const bodyParser = require('body-parser');

const express = require('express');

const app = express();

const Album = require('./data/test');

const PORT = 3000;
// app.use(express.static(`${__dirname}/dist`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
  // res.send(await Album.find({}));
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send({ message: 'post ok' });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
