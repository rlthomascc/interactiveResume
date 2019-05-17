/* eslint-disable react/jsx-one-expression-per-line */
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
            img: '',
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
                        <a href="http://www.delrealgroupreviews.com/" target="_blank" className="text-dark font-weight-bold" className="text-dark font-weight-bold">Review Router</a>
                        <br />
                            <img className="appImage" src="/images/reviewrouter/reviewroutermain.png" width="150px" onClick={() => this.setState({ view: 'reviewRouter' })} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm text-center">
                            <p className="text-dark font-weight-bold">ESPN Rams Team Page</p>
                                <img className="appImage" src="/images/rams.png" width="150px" onClick={() => this.setState({ view: 'espn' })} />
                    </div>
                    <div className="col-sm text-center">
                            <p className="text-dark font-weight-bold">Real Team</p>
                                <img className="appImage" src="/images/realteam/logo.png" width="150px" onClick={() => this.setState({ view: 'realteam' })} />
                    </div>
                </div>
            </div>
        );
    }

    renderView() {
        const { view, img } = this.state;
        if (view === 'flickFinder' && img === '') {
            return (
                <div className="container" id="flickFinderContainer">
                    <div className="row">
                        <p id="goBack" className="text-primary" onClick={() => this.setState({ view: '' })}>{'< Go Back'}</p>
                    </div>
                    <div className="row">
                        <p>
                            <b><i>Full Stack Engineer (Creative Director, Engineer) </i></b> <br />
                            • MERN stack project with TMDb API to generate random films based on user specified
                            genre. <br />
                            • Designed application aesthetics using Bootstrap. <br />
                            • Deployed web service with AWS EC2. <br />
                            • Updated nameservers on Godaddy to match AWS Route53 input. <br />
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-sm text-center">
                            <img className="appImage" src="/images/flickfinder/1.png" width="500px" height="275px" onClick={() => this.setState({ img: '/images/flickfinder/1.png' })} />
                            <p className="text-secondary">Click Image To Enlarge.</p>
                        </div>
                        <div className="col-sm text-center">
                            <img className="appImage" src="/images/flickfinder/2.png" width="500px" height="275px" onClick={() => this.setState({ img: '/images/flickfinder/2.png' })} />
                            <p className="text-secondary">Click Image To Enlarge.</p>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm text-center">
                            <img className="appImage" src="/images/flickfinder/3.png" width="500px" height="275px" onClick={() => this.setState({ img: '/images/flickfinder/3.png' })} />
                            <p className="text-secondary">Click Image To Enlarge.</p>
                        </div>
                    </div>
                </div>
            );
        }
        if (view === 'flickFinder' && img.length > 1) {
            return (
                <div className="container" id="flickFinderContainer">
                    <div className="row">
                        <p id="goBack" className="text-primary" onClick={() => this.setState({ img: '' })}>{'< Go Back'}</p>
                    </div>
                    <div className="row">
                        <div className="col-sm text-center">
                            <a href="http://www.flick-finder.com/" target="_blank">
                                <img src={img} width="1100" height="600" />
                            </a>
                        </div>
                    </div>
                </div>
            );
        }
        if (view === 'drgapp' && img === '') {
            return (
                <div className="container" id="flickFinderContainer">
                    <div className="row">
                        <p id="goBack" className="text-primary" onClick={() => this.setState({ view: '' })}>{'< Go Back'}</p>
                    </div>
                    <div className="row">
                        <p>
                            <b><i>Full Stack Engineer (Creative Director, Engineer) </i></b> <br />
                            • Mortgage calculator IOS App for Real Estate Team. <br />
                            • Engineered front end interface using React Native and React Chart. <br />
                            • Deployed IOS Application to the Apple App Store <br />
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-sm text-center">
                            <img className="appImage" src="/images/drgapp/0.png" width="600px" onClick={() => this.setState({ img: '/images/drgapp/0.png' })} />
                            <p className="text-secondary">Click Image To Enlarge.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm text-center">
                            <img className="appImage" src="/images/drgapp/1.png" width="200px" onClick={() => this.setState({ img: '/images/drgapp/1.png' })} />
                            <p className="text-secondary">Click Image To Enlarge.</p>
                        </div>
                        <div className="col-sm text-center">
                            <img className="appImage" src="/images/drgapp/2.png" width="200px" onClick={() => this.setState({ img: '/images/drgapp/2.png' })} />
                            <p className="text-secondary">Click Image To Enlarge.</p>
                        </div>
                        <div className="col-sm text-center">
                            <img className="appImage" src="/images/drgapp/3.png" width="200px" onClick={() => this.setState({ img: '/images/drgapp/3.png' })} />
                            <p className="text-secondary">Click Image To Enlarge.</p>
                        </div>
                        <div className="col-sm text-center">
                            <img className="appImage" src="/images/drgapp/4.png" width="200px" onClick={() => this.setState({ img: '/images/drgapp/4.png' })} />
                            <p className="text-secondary">Click Image To Enlarge.</p>
                        </div>
                    </div>
                </div>
            );
        }
        if (view === 'drgapp' && img.length > 1) {
            if (img === '/images/drgapp/0.png') {
                return (
                    <div className="container" id="drgappContainer">
                    <div className="row">
                        <p id="goBack" className="text-primary" onClick={() => this.setState({ img: '' })}>{'< Go Back'}</p>
                    </div>
                    <div className="row">
                        <div className="col-sm text-center">
                            <a href="https://itunes.apple.com/us/app/del-real-group-calculator/id1450068933?mt=8" target="_blank">
                                <img src={img} height="600" />
                            </a>
                        </div>
                    </div>
                    </div>
                );
            }
            return (
                <div className="container" id="drgappContainer">
                    <div className="row">
                        <p id="goBack" className="text-primary" onClick={() => this.setState({ img: '' })}>{'< Go Back'}</p>
                    </div>
                    <div className="row">
                        <div className="col-sm text-center">
                            <a href="https://itunes.apple.com/us/app/del-real-group-calculator/id1450068933?mt=8" target="_blank">
                                <img src={img} height="800" />
                            </a>
                        </div>
                    </div>
                </div>
            );
        }
        if (view === 'reviewRouter' && img === '') {
            return (
                <div className="container" id="reviewrouterContainer">
                    <div className="row">
                        <p id="goBack" className="text-primary" onClick={() => this.setState({ view: '' })}>{'< Go Back'}</p>
                    </div>
                    <div className="row">
                        <p>
                            <b><i>Full Stack Engineer</i></b> <br />
                            • Designed full stack MERN project, allowing users to select a real estate. <br />
                            agent of their choice, add a review, copy and paste the review on the top 5 social media <br />
                            outlets of the agents choosing. <br />
                            • Developed aesthetic with React in-line Bootstrap and CSS. <br />
                            • Deployed service via Heroku with Godaddy domain routing. <br />
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-sm text-center">
                            <img className="appImage" src="/images/reviewrouter/1.png" width="500px" height="275px" onClick={() => this.setState({ img: '/images/reviewrouter/1.png' })} />
                            <p className="text-secondary">Click Image To Enlarge.</p>
                        </div>
                        <div className="col-sm text-center">
                            <img className="appImage" src="/images/reviewrouter/2.png" width="500px" height="275px" onClick={() => this.setState({ img: '/images/reviewrouter/2.png' })} />
                            <p className="text-secondary">Click Image To Enlarge.</p>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm text-center">
                            <img className="appImage" src="/images/reviewrouter/3.png" width="500px" height="275px" onClick={() => this.setState({ img: '/images/reviewrouter/3.png' })} />
                            <p className="text-secondary">Click Image To Enlarge.</p>
                        </div>
                    </div>
                </div>
            );
        }
        if (view === 'reviewRouter' && img.length > 1) {
            return (
                <div className="container" id="reviewrouterContainer">
                    <div className="row">
                        <p id="goBack" className="text-primary" onClick={() => this.setState({ img: '' })}>{'< Go Back'}</p>
                    </div>
                    <div className="row">
                        <div className="col-sm text-center">
                            <a href="http://www.delrealgroupreviews.com/" target="_blank">
                                <img src={img} width="1100" height="600" />
                            </a>
                        </div>
                    </div>
                </div>
            );
        }
        if (view === 'espn' && img.length < 1) {
            return (
                <div className="container" id="espnContainer">
                    <div className="row">
                        <p id="goBack" className="text-primary" onClick={() => this.setState({ view: '' })}>{'< Go Back'}</p>
                    </div>
                    <div className="row" id="espnDescription">
                        <p className="text-dark">
                            <b><i>Back-End Engineer</i></b> <br />
                            • Architected system backend to scale 10M records via stress testing and PostgreSQL <br />
                            query optimizations. <br />
                            • Deployed service and database instances into AWS EC2 for horizontal scaling. <br />
                            • Integrated AWS Elastic Load Balancer for autoscaling leveraging AMI and Docker technologies. <br />
                            • Implemented Nginx reverse proxy with caching to increase service throughput to 12k <br />
                            rps at 3ms per request and 0% error rate.
                        </p>
                    </div>
                </div>
            );
        }
        if (view === 'realteam' && img.length < 1) {
            return (
                <div className="container" id="realteamContainer">
                    <div className="row">
                        <p id="goBack" className="text-primary" onClick={() => this.setState({ view: '' })}>{'< Go Back'}</p>
                    </div>
                    <div className="row">
                        <p>
                            <b><i>Full Stack Engineer (Creative Director, Engineer) </i></b> <br />
                            • Real Estate team management and accountability tracker. <br />
                            • Engineered authentication with BCrypt, aesthetics with bootstrap in-line styling, Chart implementation <br />
                            utilizing ChartJS
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-sm text-center">
                            <img className="appImage" src="/images/realteam/1.png" width="500px" height="275px" onClick={() => this.setState({ img: '/images/realteam/1.png' })} />
                            <p className="text-secondary">Click Image To Enlarge.</p>
                        </div>
                        <div className="col-sm text-center">
                            <img className="appImage" src="/images/realteam/2.png" width="500px" height="275px" onClick={() => this.setState({ img: '/images/realteam/2.png' })} />
                            <p className="text-secondary">Click Image To Enlarge.</p>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm text-center">
                            <img className="appImage" src="/images/realteam/3.png" width="500px" height="275px" onClick={() => this.setState({ img: '/images/realteam/3.png' })} />
                            <p className="text-secondary">Click Image To Enlarge.</p>
                        </div>
                    </div>
                </div>
            );
        }
        if (view === 'realteam' && img.length > 1) {
            return (
                <div className="container" id="realteamContainer">
                    <div className="row">
                        <p id="goBack" className="text-primary" onClick={() => this.setState({ img: '' })}>{'< Go Back'}</p>
                    </div>
                    <div className="row">
                        <div className="col-sm text-center">
                                <img src={img} width="1100" height="600" />
                        </div>
                    </div>
                </div>
            );
        }
        return this.skills();
    }

    render() {
        return (
            this.renderView()
        );
    }
}

export default Applications;
