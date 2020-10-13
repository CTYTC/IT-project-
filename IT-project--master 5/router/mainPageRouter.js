const express = require('express');
const mainPageRouter = express.Router();
const mainPageController = require('../Controller/mainPageController');

mainPageRouter.get('/', (req, res) => mainPageController.getPage(req,res));

module.exports = mainPageRouter;