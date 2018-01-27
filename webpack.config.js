var webpack = require('webpack');

var config = {
  context: __dirname + '/src', // `__dirname` is root of project and `src` is source
  entry: {
    app: './app.js'
  },
  output: {
    path: __dirname + '/js', // `dist` is the destination
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/src' // `__dirname` is root of the project
  }
};

module.exports = config;
