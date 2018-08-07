import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './containers/item-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemList />
      </div>
    );
  }
}

export default App;
