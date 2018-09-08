import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Voyage from './Voyage/VoyagePage'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Voyage  />
      </div>
    );
  }
}

export default App;
