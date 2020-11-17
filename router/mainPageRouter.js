const express = require('express');
const mainPageRouter = express.Router();
const mainPageController = require('../Controller/mainPageController');

const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

mainPageRouter.get('/', (req, res) => mainPageController.getPage(req,res));
mainPageRouter.get('/getHomepage', (req, res) => mainPageController.getHomepage(req,res));
mainPageRouter.post('/updateIntroduction', (req,res) => mainPageController.updateIntroduction(req, res));
mainPageRouter.post('/updateImage', multipartMiddleware, (req,res) => mainPageController.updateHomepage(req, res));

module.exports = mainPageRouter;