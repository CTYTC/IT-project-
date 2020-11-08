const express = require('express');
const BackstageRouter = express.Router();
const BackstageController = require('../Controller/BackstageController');

BackstageRouter.get('/',(req,res) => BackstageController.verifyToken(req,res));

module.exports = BackstageRouter;