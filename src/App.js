import React, { Component } from 'react';
import './App.css';
import Products from './views/Products';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Products</h1>
        </header>
        <Products />
      </div>
    );
  }
}

export default App;
