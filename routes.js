var MAIN_HANDLER = require('./handlers/main.js');

module.exports = function(app) {
    app.get('/hello', MAIN_HANDLER.main);
};