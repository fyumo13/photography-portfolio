const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    photo: {
        type: String,
        required: true,
        match: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        unique: true
    },
    album: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album'
    }
}, {
    timestamps: true
});

const Photo = mongoose.model('photo', photoSchema);

module.exports = Photo;