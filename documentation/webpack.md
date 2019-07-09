# Webpack

## Install Packages

1. `npm install @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli --save-dev`
2. `npm install react react-dom --save`
3. Example `webpack.config.js`

```javascript
var path = require('path');
var SRC_DIR = path.join(__dirname, '/src');
var DIST_DIR = path.join(__dirname, '/dist');
module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    ]
  }
};
```
