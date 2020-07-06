const router = require('express').Router();

const Photo = require('../models/photo.model');
const Album = require('../models/album.model');
const { restart } = require('nodemon');

createPhoto = async (req, res) => {
    const { photo }= req.body;
    const album = await Album.findById(req.params.id);
    const image = await Photo.create({ photo, album });

    album.photos.push(image);
    await album.save()
        .then(() => {
            return res.status(200).json({ success: true, image });
        })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });
}

displayPhotos = async (req, res) => {
    await Photo.find({}).sort({ createdAt: 'desc' })
        .then(photos => {
            return res.status(200).json({ success: true, photos });
        })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });
}

displayPhoto = async (req, res) => {
    await Photo.findById(req.params.id)
        .then(photo => {
            return res.status(200).json({ success: true, photo });
        })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });
}

displayPhotosByAlbum = async (req, res) => {
    const album = await Album.findById(req.params.id)
        .catch(err => {
            return res.status(400).json({ success: false, message: 'This album does not exist!' });
        });

    await Photo.find({ album: album._id })
        .then(photos => {
            return res.status(200).json({ success: true, photos });
        })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });
}

updatePhoto = async (req, res) => {
    const update = req.body;
    await Photo.findOneAndUpdate({ _id: req.params.id }, update)
        .then(photo => {
            return res.status(200).json({ success: true, photo });
        })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });
}

deletePhoto = async (req, res) => {
    const photo = await Photo.findById({ _id: req.params.id })
        .catch(err => {
            return res.status(404).json({ success: false, message: 'This photo does not exist!' });
        });

    const album = await Album.findOneAndUpdate({ _id: photo.album }, { $pull: { photos: req.params.id } }, { runValidators: true });

    await Photo.findOneAndDelete({ _id: req.params.id })
        .then(() => {
            return res.status(200).json({ success: true });
        })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });
}

module.exports = {
    createPhoto,
    displayPhotos,
    displayPhoto,
    displayPhotosByAlbum,
    updatePhoto,
    deletePhoto
}