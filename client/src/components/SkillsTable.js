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
                  <a href="https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=nrvnLH3b%2FT65TweKynNIC4Fgsyo%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjvK5TXebKkokAUeC8JjQA3er21SWKyEI7uI9m5fdhxipHkLML5agYUbhl4lWdI" target="_blank" className="text-dark font-weight-bold">Real Team </a>
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
                  <a href="http://www.flick-finder.com/" target="_blank" className="text-dark font-weight-bold">Flick Finder </a>
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
                  <a href = "https://itunes.apple.com/us/app/del-real-group-calculator/id1450068933?mt=8" target="_blank" className="text-dark font-weight-bold" >DRG Mortgage Calculator | IOS App </a>
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
                  <a href="http://www.delrealgroupreviews.com/" target="_blank" className="text-dark font-weight-bold">Review Router </a>
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
