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
            <a className="navItems" target="_blank" href="#">Home</a>
          </li>
          <li className="navSeparation">
              |
          </li>
          <li>
            <a className="navItems" target="_blank" href="https://www.github.com/rlthomascc">Github</a>
          </li>
          <li className="navSeparation">
              |
          </li>
          <li>
            <a className="navItems" target="_blank" href="https://www.linkedin.com/in/randy-thomas-71b5bb77/">LinkedIn</a>
          </li>
          <li className="navSeparation">
              |
          </li>
          <li>
         {/* <a className="navItems" target="_blank" href="/images/Resume2019Final.pdf" download>Download Resume</a> */}
        <a className="navItems" target="_blank" href="https://s3-us-west-1.amazonaws.com/rlthomas-pdf-resume/RandyThomasResume2_CV.pdf" download>Download Resume</a> 
	 </li>
          <li className="navSeparation">
              |
          </li>
          <li>
            <a className="navItems" href="#">Browse</a>
          </li>
          <li className="navSeparation">
              |
          </li>
          <li>
            <a className="navItems" href="#">Search</a>
          </li>
          <li className="navSeparation">
              |
          </li>
          <li>
            <a className="navItems" href="#">Invite</a>
          </li>
          <li className="navSeparation">
              |
          </li>
          <li>
            <a className="navItems" href="#">Film</a>
          </li>
          <li className="navSeparation">
              |
          </li>
          <li>
            <a className="navItems" href="#">Mail</a>
          </li>
          <li className="navSeparation">
              |
          </li>
          <li>
            <a className="navItems" href="#">Blogs</a>
          </li>
          <li className="navSeparation">
              |
          </li>
          <li>
            <a className="navItems" href="#">Favorites</a>
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
