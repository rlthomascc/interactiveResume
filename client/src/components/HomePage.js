/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="d-flex flex-row">
        <div className="p2">
          <LeftSide />
        </div>
        <div className="p2">
          <RightSide />
        </div>
      </div>
    );
  }
}

export default HomePage;
