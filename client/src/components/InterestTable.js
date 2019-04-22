/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

class InterestTable extends Component {
  constructor(props) {
    super(props);
  }

  interests() {
    return (
      <div className="interestTable">
        TEST
      </div>
    );
  }

  render() {
    return (
      this.interests()
    );
  }
}

export default InterestTable;
