const path = require('path');
const nodeExternals = require('webpack-node-externals');

const ROOT_DIR = path.join(__dirname);
// const SRC_DIR = path.join(__dirname, '/src');
const DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
  entry: `${ROOT_DIR}/server.js`,
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'compiledServer.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: ROOT_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    ]
  }
};
