const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    cover: {
        type: String,
        required: true,
        match: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    },
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    photos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Photo'
    }]
}, {
    timestamps: true
});

const Album = mongoose.model('album', albumSchema);

module.exports = Album;