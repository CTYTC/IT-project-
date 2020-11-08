const express = require('express');
const homepageRouter = express.Router();
const mainPageController = require('../Controller/mainPageController');
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: 'zjz',
    api_key: '244694551593552',
    api_secret: 'BZY2Hs1w4u0lmwssr5R_CPT_hNU'
});
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

homepageRouter.post('/updateIntroduction', (req, res) => mainPageController.updateIntroduction(req,res));
homepageRouter.post('/uploadImage', multipartMiddleware, (req, res) => mainPageController.uploadImage(req,res));
homepageRouter.post('/updateBg', multipartMiddleware, (req, res) => mainPageController.uploadBg(req,res));

module.exports = homepageRouter;