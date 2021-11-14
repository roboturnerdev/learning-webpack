const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// tell express to use webpack-dev-middleware and use the webpack.config.js
// config file as a base
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);

// server
app.listen(3000, () => {
    console.log('estamos girando');
});