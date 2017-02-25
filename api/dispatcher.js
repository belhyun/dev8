import express from 'express';
import credentials from '../credentials.js';
import route from './routes.js';

require('dotenv').load();

let app = express();

app.set('port', process.env.PORT || 3000);


switch(app.get('env')){
    case 'development':
        app.use(require('morgan')('dev'));
        break;
}

app.use(express.static(__dirname + '/public'));

var mongoose = require('mongoose');
var options = {
    server: {
        socketOptions: { keepAlive: 1 }
    }
};
switch(app.get('env')){
    case 'development':
        mongoose.connect(credentials.mongo.development.connectionString, options);
        break;
    default:
        throw new Error('Unknown execution environment: ' + app.get('env'));
};

let apiOptions = {
    context: '/',
    domain: require('domain').create(),
};

apiOptions.domain.on('error', function(err){
    console.log('API domain error.\n', err.stack);
    setTimeout(function(){
        console.log('Server shutting down after API domain error.');
        process.exit(1);
    }, 5000);
    server.close();
    var worker = require('cluster').worker;
    if(worker) worker.disconnect();
});

app.listen(app.get('port'), function onAppListening(err) {
    if (err) {
        console.error(err);
    } else {
        console.info('==> server listening on port %s', app.get('port'));
    }
});

route(app);


