/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable class-methods-use-this */
/* eslint-disable indent */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Skills extends Component {
    constructor(props) {
        super(props);
    }


    skills() {
        return (
            <div className="container" id="skillsContainer">
                <div className="row">
                    <div className="col-sm text-center">
                        <p className="imageText">Javascript</p>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="150px" />
                    </div>
                    <div className="col-sm text-center">
                        <p className="imageText">JSX</p>
                        <img src="https://raw.githubusercontent.com/jsx-ir/logo/master/jsx.png" width="150px" />
                    </div>
                    <div className="col-sm text-center">
                        <p className="imageText">SQL</p>
                        <img src="https://help.plot.ly/static/images/falcon/logos/mysql.png" width="150px" />
                    </div>
                    <div className="col-sm text-center">
                        <p className="imageText">CSS</p>
                        <img src="https://www.joomlabamboo.com/images/stories/onepage/css3-vector.png" width="150px" />
                    </div>
                    <div className="col-sm text-center">
                        <p className="imageText">HTML</p>
                        <img src="https://cdn-images-1.medium.com/max/1200/1*Lk7YWiSeDYGd-ITVUXbBbA.png" width="150px" />
                    </div>
                    <div className="col-sm text-center">
                        <p className="imageText">Redux</p>
                        <img src="https://cdn-images-1.medium.com/max/1600/1*dlapmYAhWBkrFuHm020qlg.png" width="150px" />
                    </div>
                    <div className="col-sm text-center">
                        <p className="imageText">React</p>
                        <img src="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png" width="150px" />
                    </div>
                    <div className="col-sm text-center">
                        <p className="imageText">jQuery</p>
                        <img src="http://pluspng.com/img-png/jquery-logo-png--800.gif" width="150px" />
                    </div>
                    <div className="col-sm text-center">
                        <p className="imageText">Underscore</p>
                        <img src="https://cdn-images-1.medium.com/max/1200/1*6NkpTUi00kskQdCx-ZRvvA.png" width="150px" />
                    </div>
                    <div className="col-sm text-center">
                        <p className="imageText">Bootstrap</p>
                        <img src="https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg" width="150px" />
                    </div>
                    <div className="col-sm text-center">
                        <p className="imageText">MaterialUI</p>
                        <img src="https://material-ui.com/static/brand.png" width="150px" />
                    </div>
                    <div className="col-sm text-center">
                        <p className="imageText">Mocha</p>
                        <img src="http://www.stickpng.com/assets/images/58480ffbcef1014c0b5e4947.png" width="150px" />
                    </div>
                    <div className="col-sm text-center">
                        <p className="imageText">Chai</p>
                        <img src="https://avatars2.githubusercontent.com/u/1515293?s=400&v=4" width="150px" />
                    </div>
                    <div className="col-sm text-center">
                        <p className="imageText">Jest</p>
                        <img src="https://ih1.redbubble.net/image.404023266.1965/pp,550x550.jpg" width="150px" />
                    </div>
                    <div className="col-sm text-center">
                        <p className="imageText">Backbone</p>
                        <img src="https://www.anakeen.com/wp-content/uploads/2017/03/backbone-js.png" width="150px" />
                    </div>
                    <div className="col-sm text-center">
                        <p className="imageText">Node</p>
                        <img src="https://foundation.nodejs.org/wp-content/uploads/sites/50/2018/05/node.jpg" width="150px" />
                    </div>
                    <div className="col-sm text-center">
                        <p className="imageText">Expressjs</p>
                        <img src="https://buzz-prod-photos.global.ssl.fastly.net/img/06b9ed56-ced3-4078-bfc8-ca0055a69d61" width="150px" />
                    </div>
                    <div className="col-sm text-center">
                        <p className="imageText">AWS</p>
                        <img src="data:image/png;base64,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" width="150px" />
                    </div>
                    <div className="col-sm text-center">
                        <p className="imageText">PostgreSQL</p>
                        <img src="https://stitch-microverse.s3.amazonaws.com/uploads/integrations/postgresql-logo_7SyLG2o.png" width="150px" />
                    </div>
                    <div className="col-sm text-center">
                        <p className="imageText">MongoDB</p>
                        <img src="https://www.worksonarm.com/wp-content/uploads/2017/03/mongodb-logo-1.png" width="150px" />
                    </div>
                    <div className="col-sm text-center">
                        <p className="imageText">SQLite</p>
                        <img src="https://cdn.worldvectorlogo.com/logos/sqlite.svg" width="150px" />
                    </div>
                    <div className="col-sm text-center">
                        <p className="imageText">CassandraDB</p>
                        <img src="https://images.techhive.com/images/article/2014/06/cassandra-logo-fxd-100310326-primary.idge.jpg" width="150px" />
                    </div>
                    <div className="col-sm text-center">
                        <p className="imageText">Grunt</p>
                        <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/grunt-1-logo.png" width="150px" />
                    </div>
                    <div className="col-sm text-center">
                        <p className="imageText">Travis CI</p>
                        <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/travis-ci-logo.png" width="150px" />
                    </div>
                    <div className="col-sm text-center">
                        <p className="imageText">Firebase</p>
                        <img src="https://ih0.redbubble.net/image.489553250.2202/flat,550x550,075,f.jpg" width="150px" />
                    </div>
                    <div className="col-sm text-center">
                        <p className="font-weight-bold text-center">BCrypt</p>
                        <img src="https://cybersensor.files.wordpress.com/2018/08/bcrypt-logo.jpg?w=605" width="150px" />
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

export default Skills;
