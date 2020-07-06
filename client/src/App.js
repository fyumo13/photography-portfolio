import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import AlbumCovers from './components/AlbumCovers';
import Album from './components/Album';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={AlbumCovers} />
                    <Route path="/:id" component={Album} />
                </Switch>
                <Footer />
            </Router>
            
        );
    }
}

export default App;