const express = require('express');
const PhotoCtrl = require('../controllers/photo.controller');
const Photo = require('../models/photo.model');
const router = express.Router();

router.post('/create/:id', PhotoCtrl.createPhoto);
router.get('/', PhotoCtrl.displayPhotos);
router.get('/:id', PhotoCtrl.displayPhoto);
router.get('/album/:id', PhotoCtrl.displayPhotosByAlbum);
router.put('/update/:id', PhotoCtrl.updatePhoto);
router.delete('/delete/:id', PhotoCtrl.deletePhoto);

module.exports = router;