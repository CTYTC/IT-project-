const express = require('express');
const timelineRouter = express.Router();
const timelineController = require('../Controller/timelineController');

timelineRouter.get('/',(req,res) => timelineController.getPage(req,res));
timelineRouter.get('/add',(req,res) => timelineController.addTimelinePage(req,res));
timelineRouter.post('/add',(req,res) => timelineController.addTimeline(req,res));

module.exports = timelineRouter;