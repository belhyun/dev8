'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _credentials = require('../credentials.js');

var _credentials2 = _interopRequireDefault(_credentials);

var _routes = require('./routes.js');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').load();

var app = (0, _express2.default)();

app.set('port', process.env.PORT || 3000);

switch (app.get('env')) {
    case 'development':
        app.use(require('morgan')('dev'));
        break;
}

app.use(require('body-parser')());

app.use(_express2.default.static(__dirname + '/public'));

var mongoose = require('mongoose');
var options = {
    server: {
        socketOptions: { keepAlive: 1 }
    }
};
switch (app.get('env')) {
    case 'development':
        mongoose.connect(_credentials2.default.mongo.development.connectionString, options);
        break;
    default:
        throw new Error('Unknown execution environment: ' + app.get('env'));
};

var apiOptions = {
    context: '/',
    domain: require('domain').create()
};

apiOptions.domain.on('error', function (err) {
    console.log('API domain error.\n', err.stack);
    setTimeout(function () {
        console.log('Server shutting down after API domain error.');
        process.exit(1);
    }, 5000);
    server.close();
    var worker = require('cluster').worker;
    if (worker) worker.disconnect();
});

app.listen(app.get('port'), function onAppListening(err) {
    if (err) {
        console.error(err);
    } else {
        console.info('==> server listening on port %s', app.get('port'));
    }
});

(0, _routes2.default)(app);