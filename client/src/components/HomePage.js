/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ContactTable from './ContactTable';
import InterestTable from './InterestTable';
import ApplicationsTable from './ApplicationsTable';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <div id="containerLeft" className="d-flex flex-column">
          <div className="p2">
            <p className="h4">Randy L. Thomas</p>
          </div>
          <div className="d-flex flex-row">
            <div className="p2">
              <img src="https://scontent.fsac1-1.fna.fbcdn.net/v/t1.0-9/58443032_2741138932568427_7086900504613093376_o.jpg?_nc_cat=108&_nc_oc=AQlI-YZ2b8dwoDaOPRHitZz-Xzm-X5tUKi09B6LGB8Hok-23bSDiRaRex4T1WsNVGKFwBCKyALoNEg_CE7mOvj3R&_nc_ht=scontent.fsac1-1.fna&oh=d360105548bafe4807eb15280d5686c7&oe=5D2E6DF6" width="250px" />
            </div>
            <div className="p2" id="bio">
              Male
              {' '}
              <br />
              27 years old
              {' '}
              <br />
              Manteca,
              {' '}
              <br />
              CALIFORNIA
              {' '}
              <br />
              United States
            </div>
          </div>
          <div className="p2" id="links">
            View My:
            {' '}
            <a href="http://www.github.com/rlthomascc"><b>Github </b></a>
            {' '}
|
            {' '}
            <a href="https://www.linkedin.com/in/randy-thomas-71b5bb77/"><b>LinkedIn</b></a>
          </div>
          <div className="p2" id="contactTable" />
          <ContactTable />
        </div>
        <div className="myspaceURL">
          <div className="myspaceURLInfo">
            <p className="h6 font-weight-bold">LinkedIn URL:</p>
            <a href="https://www.linkedin.com/in/randy-thomas-71b5bb77/" id="linkedinURL">https://www.linkedin.com/in/randy-thomas-71b5bb77/</a>
          </div>
        </div>
        {/* <div className="p2">
          <InterestTable />
        </div> */}
        <div className="p2">
          <ApplicationsTable />
        </div>
      </div>
    );
  }
}

export default HomePage;
