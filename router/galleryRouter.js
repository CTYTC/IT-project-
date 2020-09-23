const express = require('express');
const galleryRouter = express.Router();
const galleryController = require('../Controller/galleryController');
const upload = require("../middleware/upload");

galleryRouter.get('/',(req,res) => galleryController.getGalleryPage(req, res));
galleryRouter.post("/upload", upload.single("file"), galleryController.uploadFiles);

module.exports = galleryRouter;