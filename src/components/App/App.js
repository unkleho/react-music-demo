import React, { Component } from 'react';
// import logo from './logo.svg';
// import Song from '../Song';
import SongContainer from '../../containers/SongContainer';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <SongContainer />
      </div>
    );
  }
}

export default App;
