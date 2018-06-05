import React, { Component } from 'react';
import './App.css';
import titre from './img/titre.jpg';
import Player from './components/Player';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <img src={titre} alt="Title" className="col-3" />
          <div className="search col-4">
            <div className="row">
              <input type="text" className="form-control col-11" placeholder="Miaou Search" />
              <span className="input-group-text col1" >
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
          <span className="blanc col-6"></span>
        </div>

        <div className="container">
          <div className="row">
            <div className="player col-8">
            <Player />
            </div>
            <div className="col-4">
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
            </div>
          </div>
        </div>

      </div >
    );
  }
}

export default App;
