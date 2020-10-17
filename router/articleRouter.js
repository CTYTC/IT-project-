const express = require('express');
const articleRouter = express.Router();
const articleController = require('../Controller/articleController');

const cloudinary = require("cloudinary").v2;
//img
cloudinary.config({
    cloud_name: 'zjz',
    api_key: '244694551593552',
    api_secret: 'BZY2Hs1w4u0lmwssr5R_CPT_hNU'
});
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

articleRouter.get('/',(req,res) => articleController.getArticlePage(req,res));
articleRouter.post('/createArticle', multipartMiddleware, (req,res) => articleController.createArticle(req,res));
articleRouter.get('/modifyArticle', (req, res) => articleController.getModifyPage(req, res));
articleRouter.post('/deleteArticle', (req,res) =>articleController.deleteArticle(req,res));
articleRouter.post('/updateArticle', (req,res)=>articleController.updateArticle(req,res));
articleRouter.get('/createArticle', (req,res) => articleController.createArticlePage(req,res))
articleRouter.get('/viewArticle', (req, res) => articleController.viewArticle(req, res))
module.exports = articleRouter;