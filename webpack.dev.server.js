'use strict';

require('dotenv').load();

var Express = require('express');
var webpack = require('webpack');
var fs = require('fs');
var WebpackDevServer = require('webpack-dev-server');

var webpackConfig = require('./webpack.dev.config.js');
var compiler = webpack(webpackConfig);
//var webpackMiddleware = require('webpack-dev-middleware');
//var webpackHotMiddleware = require('webpack-hot-middleware');
var devServer = new WebpackDevServer(compiler, webpackConfig.devServer);
//var port = process.env.PORT || 52273;
var devPort = 52273;
var port = 3000;

var app = new Express();

//app.use(webpackMiddleware(compiler, {
//    publicPath: webpackConfig.output.publicPath,
//    hot: true,
//    noInfo: true,
//    quiet: true,
//    historyApiFallback: true,
//    stats: { colors: true },
//    headers: { 'Access-Control-Allow-Origin': '*' },
//   host: host,
//    port: port
//}));

//app.use(webpackHotMiddleware(compiler, {
//    log: console.log
//}));

app.use('/', Express.static('./public'));

app.get('/hello', function (req, res) {
    return res.send('Can you hear me?');
});

devServer.listen(devPort, function onAppListening(err) {
    if (err) {
        console.error(err);
    } else {
        console.info('==> Webpack development server listening on port %s', devPort);
    }
});

app.listen(port, function onAppListening(err) {
    if (err) {
        console.error(err);
    } else {
        console.info('==> Webpack development server listening on port %s', port);
    }
});