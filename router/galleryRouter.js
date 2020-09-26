const express = require('express');
const galleryRouter = express.Router();
const galleryController = require('../Controller/galleryController');

var cloudinary = require("cloudinary");
//img
cloudinary.config({
    cloud_name: 'zjz',
    api_key: '244694551593552',
    api_secret: 'BZY2Hs1w4u0lmwssr5R_CPT_hNU'
});
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

galleryRouter.post('/gallery',multipartMiddleware, galleryController.uploadImage);
galleryRouter.get('/gallery',galleryController.getGalleryPage);
module.exports = galleryRouter;