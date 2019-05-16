/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

class ContactTable extends Component {
  constructor(props) {
    super(props);
  }


  table() {
    return (
      <div>
        <div className="contactName">
          <p className="h5 contactingRandy"><b>Contacting Randy</b></p>
        </div>
        <div className="contact">
          <div className="d-flex flex-row justify-content-between">
            <div className="p2">
              <p className="font-weight-bold"><a href="mailto: bookingrlthomas@gmail.com"><img src="/images/MESSAGE_ICON.png" width="40px" /> {' '} Send Email </a></p>
              <p className="font-weight-bold"><a href="https://www.linkedin.com/in/randy-thomas-71b5bb77/" target="_blank"><img src="/images/ADD_LOGO.png" width="40px" /> {' '} Add to LinkedIn </a></p>
              <p className="font-weight-bold"><a href="https://s3-us-west-1.amazonaws.com/rlthomas-pdf-resume/RandyThomasResume2_CV.pdf" target="_blank" download><img src="/images/INSTANT_MESSAGE.png" width="30px" />{' '} Download Resume </a></p>
              <p className="font-weight-bold"><a href="https://www.linkedin.com/in/randy-thomas-71b5bb77/" target="_blank"><img src="/images/ADD_TO_GROUP.png" width="40px" /> {' '} Add to Group </a></p>
            </div>
            <div className="p2">
              <p className="font-weight-bold"><a href="https://www.linkedin.com/in/randy-thomas-71b5bb77/" target="_blank"><img src="/images/FORWARD_TO_FRIEND.png" width="30px" /> {' '} Forward To Friend </a></p>
              <p className="font-weight-bold"><a href="https://www.linkedin.com/in/randy-thomas-71b5bb77/" target="_blank"><img src="/images/ADD_TO_FAVORITES.png" width="30px" /> {' '} Add to Favorites </a></p>
              <p className="font-weight-bold"><a href="https://www.linkedin.com/in/randy-thomas-71b5bb77/" target="_blank"><img src="/images/BLOCK_USER.png" width="30px" /> {' '} Block User </a></p>
              <p className="font-weight-bold"><a href="https://www.linkedin.com/in/randy-thomas-71b5bb77/" target="_blank"><img src="/images/RANK_USER.png" width="30px" /> {' '} Rank User </a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      this.table()
    );
  }
}

export default ContactTable;
