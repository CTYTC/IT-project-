const express = require('express');
const timelineRouter = express.Router();
const timelineController = require('../Controller/timelineController');

timelineRouter.get('/',(req,res) => timelineController.getPage(req,res));
timelineRouter.get('/add',(req,res) => timelineController.addTimelinePage(req,res));
timelineRouter.post('/add',(req,res) => timelineController.addTimeline(req,res));
timelineRouter.get('/pageinfo',(req,res) => timelineController.pageInfo(req,res));
timelineRouter.post('/delete',(req,res) => timelineController.deleteTimeline(req,res));
timelineRouter.post('/update',(req,res) => timelineController.updateTimeline(req,res));
timelineRouter.get('/getAllInfo',(req,res) => timelineController.getAllInfo(req,res));

module.exports = timelineRouter;