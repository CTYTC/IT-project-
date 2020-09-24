const express = require('express');
const articleRouter = express.Router();
const articleController = require('../Controller/articleController');


articleRouter.get('/',(req,res) => articleController.getArticlePage(req,res));
articleRouter.get('/retrieveArticles',(req,res) => articleController.retrieveArticles(req,res));
articleRouter.post('/createArticle',(req,res) => articleController.createArticle(req,res));
articleRouter.get('/modifyArticle', (req, res) => articleController.getModifyPage(req, res))
module.exports = articleRouter;