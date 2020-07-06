const router = require('express').Router();

const Album = require('../models/album.model');

createAlbum = async (req, res) => {
    const { cover, title, link } = req.body;
    await Album.create({ cover, title, link })
        .then(album => {
            return res.status(200).json({ success: true, album });
        })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });
}

displayAlbums = async (req, res) => {
    await Album.find({}).sort({ createdAt: 'desc' })
        .then(albums => {
            return res.status(200).json({ success: true, albums });
        })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });
}

displayAlbum = async (req, res) => {
    await Album.findById(req.params.id) 
        .then(album => {
            return res.status(200).json({ success: true, album });
        })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });
}

updateAlbum = async (req, res) => {
    const update = req.body;
    await Album.findOneAndUpdate({ _id: req.params.id }, update)
        .then(album => {
            return res.status(200).json({ success: true, album });
        })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });
}

deleteAlbum = async (req, res) => {
    await Album.findOneAndDelete({ _id: req.params.id })
        .then(() => {
            return res.status(200).json({ success: true });
        })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });
}

module.exports = {
    createAlbum,
    displayAlbums,
    displayAlbum,
    updateAlbum,
    deleteAlbum
}