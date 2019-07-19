import App from './src/components/App.jsx';
import 'regenerator-runtime/runtime';

const React = require('react');

const ReactDOMServer = require('react-dom/server');

const fs = require('fs');

const cors = require('cors');

const bodyParser = require('body-parser');

const path = require('path');

const express = require('express');

const app = express();

const Album = require('./data/database');

const PORT = 3002;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('dist'));
app.use(cors());

// const serverRenderer = () => {
//   const renderedData = new Promise((resolve, reject) => {
//     fs.readFile(path.resolve('./dist/index.html'), 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         const render = ReactDOMServer.renderToString(<App />);
//         data.replace(`<div id="app"></div>`, `<div id="app">${render}</div>`);
//         resolve(data);
//       }
//     });
//   });
//   return renderedData;
// };

// app.get('/test', (req, res) => {
//   // serverRenderer()
//   //   .then(data => {
//   //     res.send(data);
//   //   })
//   //   .catch(error => res.status(500).send(error));
// });

app.get('/style', async (req, res) => {
  res.sendFile(await path.join(__dirname, 'dist/style.css'));
});

app.get('/albums', async (req, res) => {
  res.send(await Album.find({}).exec());
});

app.get('/api/albums/:albumId', async (req, res) => {
  const content = await Album.findOne({ id: parseInt(req.params.albumId, 10) });
  const albumComponent = ReactDOMServer.renderToString(<App albumData={content} />);
  const page = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900"
        rel="stylesheet"
        type="text/css"
      />

      <link
        rel="stylesheet"
        href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/8.3.0/nouislider.min.css"
      />
      <meta charset="UTF-8" />
      <title>Songify Tracks Component</title>
    </head>
    <body>
      <div id="app">${albumComponent}</div>
    </body>
  </html>`;
  res.send(page);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
