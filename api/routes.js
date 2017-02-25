import IMAGE_HANDLER from './handlers/images/images.js';

module.exports = function(app) {
    app.get('/images', IMAGE_HANDLER.images);
    app.get('/image/:id', IMAGE_HANDLER.image);
};


