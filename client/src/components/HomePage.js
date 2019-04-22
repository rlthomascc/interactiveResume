/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        {/* Create flexbox container for Myspace.com profile details */}
        <div className="container">
          <div className="item1">
            <p>ITEM 1</p>
          </div>
          <div className="item2">
            <p>ITEM 2</p>
          </div>
          <div className="item3">
            <p>ITEM 3</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
