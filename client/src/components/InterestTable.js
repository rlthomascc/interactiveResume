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
      <div className="container" id="interestTable">
        <div className="row" id="randysInterests">
          <p className="h5 font-weight-bold">Randy's Interests</p>
        </div>
        <div className="col">

          <div className="row" id="interestRow">
            <div id="interestLeft">
              <p className="font-weight-bold">General</p>
            </div>
            <div id="interestRight">
              <p>
              Full Stack Software Engineer with a strong love for Javascript.
              I have a passion for collaboration and making ideas become reality.
              I have a strong technical background with the MERN stack, as well as SQL
              and NoSQL technologies.
              </p>
            </div>
          </div>

          <div className="row" id="interestRow">
            <div id="interestLeft">
              <p className="font-weight-bold">Strengths</p>
            </div>
            <div id="interestRight">
              <p>
              Teamwork, Responsibility, Adaptability, Creativity, Optimism, Dedication,
              Motivation, Detail Oriented, Tactful
              </p>
            </div>
          </div>

          <div className="row" id="interestRow">
            <div id="interestLeft">
              <p className="font-weight-bold">Inspirations</p>
            </div>
            <div id="interestRight">
              <p>
              God, my family, my wife, and my daughter Zara
              </p>
            </div>
          </div>


        </div>
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
