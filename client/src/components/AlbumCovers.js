import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AlbumCover = props => (
    <div className="card photo scale-in-center">
        <Link to={'/' + props.album._id}>
            <div className="card-img-overlay">
                <h2 className="card-text text-center text-uppercase">{props.album.title}</h2>
            </div>
            <img src={props.album.cover} alt={props.album.title} />
        </Link>
    </div>
    
);

class AlbumCovers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: [],
            mode: localStorage.getItem('mode')
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/albums`)
            .then(res => {
                this.setState({
                    albums: res.data.albums
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidUpdate(prevState) {
        if (prevState.albums !== this.state.albums || prevState.mode !== this.state.mode) {
            axios.get(`http://localhost:8000/albums`)
                .then(res => {
                    this.setState({
                        albums: res.data.albums,
                        mode: localStorage.getItem('mode')
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    displayAlbums() {
        return this.state.albums.map(album => {
            return <AlbumCover album={album} key={album._id} />
        });
    }

    render() {
        return (
            <div id="content" className={this.state.mode}>
                { this.displayAlbums() }
            </div>
        );
    }
}

export default AlbumCovers;