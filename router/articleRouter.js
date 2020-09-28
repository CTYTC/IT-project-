const express = require('express');
const articleRouter = express.Router();
const articleController = require('../Controller/articleController');


articleRouter.get('/',(req,res) => articleController.getArticlePage(req,res));
articleRouter.post('/createArticle',(req,res) => articleController.createArticle(req,res));
articleRouter.get('/modifyArticle', (req, res) => articleController.getModifyPage(req, res));
articleRouter.post('/deleteArticle', (req,res) =>articleController.deleteArticle(req,res));
articleRouter.post('updateArticle', (req,res)=>articleController.updateArticle(req,res));
module.exports = articleRouter;