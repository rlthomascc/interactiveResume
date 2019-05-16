/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable class-methods-use-this */
/* eslint-disable indent */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Applications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: '',
        };
    }


    skills() {
        return (
            <div className="container" id="skillsContainer">
                <div className="row">

                    <div className="col-sm text-center">
                        <a href="http://www.flick-finder.com/" target="_blank" className="text-dark font-weight-bold">Flick Finder</a>
                        <br />
                            <img className="appImage" src="/images/flickfinder/flickFinderMainIcon.png" width="150px" onClick={() => this.setState({ view: 'flickFinder' })} />
                    </div>
                    <div className="col-sm text-center">
                        <a href="https://itunes.apple.com/us/app/del-real-group-calculator/id1450068933?mt=8" target="_blank" className="text-dark font-weight-bold">DRG Mortgage Calculator (IOS)</a>
                        <br />
                            <img className="appImage" src="/images/drgapp/drgmainicon.png" width="150px" onClick={() => this.setState({ view: 'drgapp' })} />
                    </div>
                    <div className="col-sm text-center">
                        <a href="http://www.delrealgroupreviews.com/" target="_blank" className="text-dark font-weight-bold">Review Router</a>
                        <br />
                            <img className="reviewRouter" src="/images/reviewrouter/reviewroutermain.png" width="150px" onClick={() => this.setState({ view: 'reviewRouter' })} />
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            this.skills()
        );
    }
}

export default Applications;
