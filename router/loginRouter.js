const express = require('express');
const loginRouter = express.Router();
const loginController = require('../Controller/loginController');

loginRouter.get('/',(req,res) => loginController.getLoginPage(req,res));
loginRouter.post('/',(req,res) => loginController.loginToSystem(req,res));
loginRouter.get('/register',(req,res) => loginController.getRegisterPage(req,res));
loginRouter.post('/register',(req,res) => loginController.getUserInfo(req,res));

module.exports = loginRouter;