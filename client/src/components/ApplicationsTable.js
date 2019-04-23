/* eslint-disable no-useless-constructor */
/* eslint-disable indent */
/* eslint-disable lines-between-class-members */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

class ApplicationsTable extends Component {
    constructor(props) {
        super(props);
    }


    applications() {
        return (
          <div className="container" id="interestTable">
            <div className="row" id="randysInterests">
              <p className="h5 font-weight-bold">Randy's Applications</p>
            </div>
            <div className="col">

              <div className="row" id="interestRow">
                <div id="interestLeft">
                  <p className="font-weight-bold">Real Team</p>
                </div>
                <div id="interestRight">
                  <p>
                    <i>Full Stack Engineer (Creative Director, Engineer)</i>
                    {' '}
                    <br />
• Real Estate team management and accountability tracker.
                    {' '}
                    <br />
• Engineered authentication with BCrypt, aesthetics with bootstrap in-line styling, Chart implementation utilizing ChartJS.
                  </p>
                </div>
              </div>

              <div className="row" id="interestRow">
                <div id="interestLeft">
                  <p className="font-weight-bold">Flick Finder | www.Flick-Finder.com </p>
                </div>
                <div id="interestRight">
                  <p>
                    <i>Front End Engineer (Creative Director, Engineer)</i>
                    {' '}
                    <br />
• MERN stack project with TMDb API to generate random films based on user specified
genre.
                    {' '}
                    <br />
• Designed application aesthetics using Bootstrap
                  </p>
                </div>
              </div>

              <div className="row" id="interestRow">
                <div id="interestLeft">
                  <p className="font-weight-bold">DRG Mortgage Calculator | App Store</p>
                </div>
                <div id="interestRight">
                  <p>
                    <i>Full Stack Engineer (Creative Director, Engineer)</i>
                    {' '}
                    <br />
• Mortgage calculator IOS App for Real Estate Team.
                    {' '}
                    <br />
• Engineered front end interface using React Native and
React Chart.
                    {' '}
                    <br />
• Deployed IOS Application to the Apple App Store.
                  </p>
                </div>
              </div>

              <div className="row" id="interestRow">
                <div id="interestLeft">
                  <p className="font-weight-bold">ESPN Rams Team Page</p>
                </div>
                <div id="interestRight">
                  <p>
                    <i>Back End Engineer </i>
                    {' '}
                    <br />
                  • Architected system backend to scale 10M records via stress testing and PostgreSQL query optimizations.
                    <br />
• Deployed service and database instances into AWS EC2 for horizontal scaling.
                    {' '}
                    <br />
• Integrated AWS Elastic Load Balancer for autoscaling leveraging AMI and Docker technologies.
                    {' '}
                    <br />
• Implemented Nginx reverse proxy w/ caching to increase service throughout to 12k rps at 3ms per request and 0% error rate
                  </p>
                </div>
              </div>

              <div className="row" id="interestRow">
                <div id="interestLeft">
                  <p className="font-weight-bold">Review Router</p>
                </div>
                <div id="interestRight">
                  <p>
                    <i>Full Stack Engineer </i>
                    {' '}
                    <br />
                  • Designed full stack MERN project, allowing users to select a real estate agent, add a review,
                  copy and paste the review on the top 5 social media outlets of the agents choosing.
                    <br />
• Developed aesthetic with React in-line bootstrap and css. .
                    {' '}
                    <br />
• Deployed service via Heroku with Godaddy domain routing.
                  </p>
                </div>
              </div>

            </div>
          </div>
        );
    }
    render() {
        return (
            this.applications()
        );
    }
}

export default ApplicationsTable;
