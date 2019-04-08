/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderView() {
    return (
      <div>
        <Navbar />
        <HomePage />
      </div>
    );
  }

  render() {
    return (
      this.renderView()
    );
  }
}

export default App;
