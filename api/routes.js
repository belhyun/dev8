import IMAGE_HANDLER from './handlers/images/images.js';

module.exports = function(app) {
    app.get('/images', IMAGE_HANDLER.images);
};