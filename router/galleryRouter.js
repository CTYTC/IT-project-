const express = require('express');
const galleryRouter = express.Router();
const galleryController = require('../Controller/galleryController');

const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

galleryRouter.post('/',multipartMiddleware, (req,res) => galleryController.uploadImage(req, res));
galleryRouter.get('/',galleryController.getGalleryPage);
galleryRouter.get('/subtitle',galleryController.getSubtitle);
galleryRouter.post('/delete',galleryController.deleteImage);
galleryRouter.post('/updateSubTitle',(req,res) => galleryController.updateModuleTitle(req, res));
module.exports = galleryRouter;