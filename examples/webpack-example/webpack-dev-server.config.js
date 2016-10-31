const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

console.log("Path", path.resolve(__dirname, '../../src') );

const config = {
  //Entry points to the project
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/app/app.js'),
  ],
  //Config options on how to interpret requires imports
  resolve: {
    extensions: ["", ".js"],
    //node_modules: ["web_modules", "node_modules"]  (Default Settings)
    alias: {
      // material-ui requires will be searched in src folder, not in node_modules
      'formsy-material-ui-express': path.resolve(__dirname, '../../'),
    },
  },
  //Server Configuration options
  devServer:{
    contentBase: 'src/www',  //Relative directory for base of server
    devtool: 'eval',
    hot: true,        //Live-reload
    inline: true,
    port: 3001,        //Port Number
    host: 'localhost',  //Change to '0.0.0.0' for external facing server
  },
  devtool: 'eval',
  output: {
    path: buildPath,    //Path of output file
    filename: 'app.js',
  },
  plugins: [
    //Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    //Allows error warnings but does not stop compiling. Will remove when eslint is added
    new webpack.NoErrorsPlugin(),
    //Moves files
    new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname, "src")),
  ],
  module: {
    loaders: [
      {
        //React-hot loader and
        test: /\.js$/,  //All .js files
        loaders: ['babel-loader'], //react-hot is like browser sync and babel loads jsx and es6-7
        // loaders: ['react-hot'], //react-hot is like browser sync and babel loads jsx and es6-7
        exclude: [nodeModulesPath], // Make it work with `npm link`ed fmui
      },
    ],
  },
  //eslint config options. Part of the eslint-loader package
  eslint: {
    configFile: '.eslintrc',
  },
};

module.exports = config;
