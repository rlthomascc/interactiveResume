/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  navbar() {
    return (
      <div className="navbarContainer">
        <ul>
          <li>
            <a className="navItems" href="#">Home</a>
          </li>
          <li className="navSeparation">
              |
          </li>
          <li>
            <a className="navItems" href="#">Github</a>
          </li>
          <li className="navSeparation">
              |
          </li>
          <li>
            <a className="navItems" href="#">Instagram</a>
          </li>
          <li className="navSeparation">
              |
          </li>
          <li>
            <a className="navItems" href="#">Facebook</a>
          </li>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.navbar()}
      </div>
    );
  }
}

export default Navbar;
