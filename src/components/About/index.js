import React from 'react';

import './style.css';
import aboutPic from '../utilities/img/myPic.png';

export default class About extends React.Component {

  render() {
    return (
      <div className="container about-container">
        <div className="row">
          <div className="col-md-6 ">
            <img id="about-pic" src={aboutPic} alt="about pic" />
          </div>
          <div className="col-md-6 text-center">
            <h1 id="about-header">About Me</h1>
            <p>
              I'm a web developer adept at building responsive web applications from front to back. My passion for software development stems from my desire to learn new technologies, bring ideas to life, and work with dedicated teams to build efficient and robust applications suited to the user’s needs. Although I've learned many tools from my mathematics courses at UCSD, an internship working under mechanical engineers, an iOS development Bootcamp, and most recently a full stack web development Bootcamp, I believe the biggest takeaway from my studies is the ability to teach myself new things quickly.
            </p>

          </div>
        </div>
      </div>
    );
  }
} 