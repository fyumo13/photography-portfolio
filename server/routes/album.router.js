const express = require('express');
const AlbumCtrl = require('../controllers/album.controller');
const Album = require('../models/album.model');
const router = express.Router();

router.post('/create', AlbumCtrl.createAlbum);
router.get('/', AlbumCtrl.displayAlbums);
router.get('/:id', AlbumCtrl.displayAlbum);
router.put('/update/:id', AlbumCtrl.updateAlbum);
router.delete('/delete/:id', AlbumCtrl.deleteAlbum);

module.exports = router;