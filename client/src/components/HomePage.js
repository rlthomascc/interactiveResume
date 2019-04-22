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
        <div className="d-flex flex-column">
          <div className="p2">
            <p className="h2">Randy L. Thomas</p>
          </div>
          <div className="p2">
            <img src="https://scontent.fsac1-1.fna.fbcdn.net/v/t1.0-9/58443032_2741138932568427_7086900504613093376_o.jpg?_nc_cat=108&_nc_oc=AQlI-YZ2b8dwoDaOPRHitZz-Xzm-X5tUKi09B6LGB8Hok-23bSDiRaRex4T1WsNVGKFwBCKyALoNEg_CE7mOvj3R&_nc_ht=scontent.fsac1-1.fna&oh=d360105548bafe4807eb15280d5686c7&oe=5D2E6DF6" width="250px" />
          </div>
          <div className="p2">
            View My:
            <a href="http://www.github.com/rlthomascc"><b>Github </b></a>
            {' '}
|
            {' '}
            <a href="https://www.linkedin.com/in/randy-thomas-71b5bb77/"><b>LinkedIn</b></a>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
