const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary').v2;

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
});

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { dbName: 'instaclone', useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

const albumsRouter = require('./routes/album.router');
const photosRouter = require('./routes/photo.router');

app.use('/albums', albumsRouter);
app.use('/photos', photosRouter);
app.use(express.static('client/build'));
app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});