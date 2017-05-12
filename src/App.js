import React, { Component } from 'react';
import Photos from './containers/Photos'
import './App.css';
import Details from "./containers/Details";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Photos />
                <Details />
            </div>
        );
    }
}

export default App;
