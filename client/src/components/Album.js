import React, { Component } from 'react';
import axios from 'axios';

const Photo = props => (
    <img className="photo scale-in-center" src={props.photo.photo} alt="Photo" />
);

class Album extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: [],
            mode: localStorage.getItem('mode')
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/photos/album/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    photos: res.data.photos
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidUpdate(prevState) {
        if (prevState.photos !== this.state.photos || prevState.mode !== this.state.mode) {
            axios.get(`http://localhost:8000/photos/album/${this.props.match.params.id}`)
                .then(res => {
                    this.setState({
                        photos: res.data.photos,
                        mode: localStorage.getItem('mode')
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    displayPhotos() {
        return this.state.photos.map(photo => {
            return <Photo photo={photo} key={photo._id} />
        });
    }

    render() {
        return (
            <div id="content" className={this.state.mode}>
                { this.displayPhotos() }
            </div>
        );
    }
}

export default Album;