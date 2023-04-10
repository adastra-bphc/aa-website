import React, { Component } from 'react';
import Blog from './blogs/blogs'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Blog/>
      </div>
    );
  }
}

export default App;