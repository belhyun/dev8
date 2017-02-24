'use strict';

require('dotenv').load();

var Express = require('express');
var webpack = require('webpack');
var fs = require('fs');
var webpackDevServer = require('webpack-dev-server');

var webpackConfig = require('./webpack.dev.config.js');
var compiler = webpack(webpackConfig);
var devServer = new webpackDevServer(compiler, webpackConfig.devServer);
var devPort = 52273;
var port = 3000;
var app = new Express();

//route init
require('./routes.js')(app);

app.use('/', Express.static('./public'));

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

