const express = require('express');
const mailRouter = express.Router(); 
const mailController = require('../Controller/mailController');

mailRouter.get('/',(req,res) => mailController.sendMail(req,res));

module.exports = mailRouter;