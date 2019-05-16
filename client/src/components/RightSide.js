/* eslint-disable react/jsx-filename-extension */
/* eslint-disable class-methods-use-this */
/* eslint-disable indent */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Applications from './Applications';

class RightSide extends Component {
    constructor(props) {
        super(props);
    }

    rightSide() {
        return (
          <div>
            <div id="containerRight" className="d-flex flex-column">
              <div className="p2" id="statusUpdate">
                <p className="h4 font-weight-bold">Randy Is Currently Looking For Employment</p>
              </div>
              <div className="p2" id="randyBlurbs">
                <p className="h5 font-weight-bold">Randy's Blurbs </p>
              </div>
              <div className="p2" id="aboutMe">
                <p className="h5 font-weight-bold" id="title">About Me</p>
                <p>
              Full Stack Software Engineer with a strong love for Javascript.
              I have a passion for collaboration and making ideas become reality.
              I have a strong technical background with the MERN stack, as well as SQL
              and NoSQL technologies.
                </p>

              </div>
              <div className="p2" id="aboutMe">
                <p className="h5 font-weight-bold" id="title">Education</p>
                <p>
                  <b>Hack Reactor / Galvanize (2018-2019)</b>
                  <br />
                  <i>Advanced Software Engineering Program</i>
                </p>
                <p>
              Hack Reactor is an immersive full-stack software engineering academy
              in San Francisco. The program included rigorous work beforehand -- including re-implementing
              Underscore.js, creating a Twitter Clone web app, and gaining a solid foundation in Javascript.

              Throughout the 38-week remote program, we mastered
              fundamental Computer Science topics such as Data Structures and Algorithms,
              advanced Javascript fundamentals (Closure scope, Inheritance and Instantiation Patters, etc),
              front-end MVC frameworks (React.js + Redux, Angular, Backbone.js), server development with Node
              and Express, and databases with MYSQL, PostgreSQL, Cassandra and Mongo during 1200 hours of
              instruction, projects, and hands-on work.
                </p>
                <br />
                <p>
                  <b>Art Institute - Sacramento (2010-2014)</b>
                  <br />
                  <i>Video Production and Design</i>
                </p>
                <p>
                Study of Video Production and Photography with a minor in graphic design and web design.
                </p>
              </div>

              <div className="p2" id="aboutMe">
                <p className="h5 font-weight-bold" id="title">Employment</p>
                <p>
                  <b>The Del Real Group (2015-Present)</b>
                  <br />
                  <i>Marketing Manager</i>
                </p>
                <p>
                • Managed advertisement campaigns with strict dead lines. Train, supervise,
                and manage 5 full-time staff.
                  {' '}
                  <br />
                • Improved company efficiency and increased leads by 40%
                  {' '}
                  <br />
                • Rebuilt company website and created Review Website ( www.DelRealGroupReviews.com )
                </p>
              </div>

              <div className="p2" id="randyBlurbs">
                <p className="h5 font-weight-bold">Randy's Applications </p>
              </div>
              <div>
                <Applications />
              </div>

            </div>
          </div>
        );
    }

    render() {
        return (
            this.rightSide()
        );
    }
}

export default RightSide;
