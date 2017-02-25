'use strict';

var _images = require('./handlers/images.js');

var _images2 = _interopRequireDefault(_images);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
    app.get('/images', _images2.default.images);
};