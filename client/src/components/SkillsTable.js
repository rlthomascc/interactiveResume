/* eslint-disable no-useless-constructor */
/* eslint-disable indent */
/* eslint-disable lines-between-class-members */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

class SkillsTable extends Component {
    constructor(props) {
        super(props);
    }


    applications() {
        return (
          <div className="container" id="interestTable">
            <div className="row" id="randysInterests">
              <p className="h5 font-weight-bold">Randy's Skills</p>
            </div>
            <div className="col">

              <div className="row" id="interestRow">
                <div id="interestLeft">
                  <p className="font-weight-bold">Languages</p>
                </div>
                <div id="interestRight">
                  <p>
                    •  Javascript (ES 5/6/7+)
                    {' '}
                    <br />
                    •  JSX
                    {' '}
                    <br />
                    •  SQL
                    {' '}
                    <br />
                    •  CSS
                    {' '}
                    <br />
                    •  HTML
                    {' '}
                    <br />
                  </p>
                </div>
              </div>

              <div className="row" id="interestRow">
                <div id="interestLeft">
                  <p className="font-weight-bold">Libraries</p>
                </div>
                <div id="interestRight">
                  <p>
                    •  Redux
                    {' '}
                    <br />
                    •  Underscore
                    {' '}
                    <br />
                    •  Material UI
                    {' '}
                    <br />
                    •  Chai
                    {' '}
                    <br />
                    •  JQuery
                    {' '}
                    <br />
                    •  Bootstrap 3/4
                    {' '}
                    <br />
                    •  Mocha
                    {' '}
                    <br />
                    •  Jest
                    {' '}
                    <br />
                  </p>
                </div>
              </div>

              <div className="row" id="interestRow">
                <div id="interestLeft">
                  <p className="font-weight-bold">Front-End Frameworks</p>
                </div>
                <div id="interestRight">
                  <p>
                    •  React
                    {' '}
                    <br />
                    •  Backbone
                    {' '}
                    <br />
                  </p>
                </div>
              </div>

              <div className="row" id="interestRow">
                <div id="interestLeft">
                  <p className="font-weight-bold">Back-End Frameworks</p>
                </div>
                <div id="interestRight">
                  <p>
                    •  Node
                    {' '}
                    <br />
                    •  AWS
                    {' '}
                    <br />
                    •  ExpressJS
                    {' '}
                    <br />
                  </p>
                </div>
              </div>

              <div className="row" id="interestRow">
                <div id="interestLeft">
                  <p className="font-weight-bold">Databases</p>
                </div>
                <div id="interestRight">
                  <p>
                    •  mySQL
                    {' '}
                    <br />
                    •  PostgreSQL
                    {' '}
                    <br />
                    •  MongoDB
                    {' '}
                    <br />
                    •  SQLite
                    {' '}
                    <br />
                    •  CassandraDB
                    {' '}
                    <br />
                  </p>
                </div>
              </div>

              <div className="row" id="interestRow">
                <div id="interestLeft">
                  <p className="font-weight-bold">Deployment-Task Runners</p>
                </div>
                <div id="interestRight">
                  <p>
                    •  AWS
                    {' '}
                    <br />
                    •  Travis
                    {' '}
                    <br />
                    •  Grunt
                    {' '}
                    <br />
                    •  Firebase
                    {' '}
                    <br />
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

export default SkillsTable;
