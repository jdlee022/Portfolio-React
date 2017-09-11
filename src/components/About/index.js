
import React from 'react';

import './style.css';
import me from '../utilities/img/me01.png';
import me2 from '../utilities/img/me02.png';
import me3 from '../utilities/img/me03.png';

export default class About extends React.Component {

  render() {
    return (
      <div className="container-fluid about-container">
        <div className="row">
          <div className="col-md-6 ">
            <div id="pic-container">
              <img className="about-pic small-pic" src={me} alt="about pic" />
              <img className="about-pic medium-pic" src={me2} alt="about pic" />
              <img className="about-pic large-pic" src={me3} alt="about pic" />
            </div>
          </div>
          <div className="col-md-6 text-center">
            <h1 id="about-header">About Me</h1>
            <p id="about-text">
              I'm a web developer adept at building responsive web applications from front to back. My passion for software development stems from my desire to learn new technologies, bring ideas to life, and work with dedicated teams to build efficient and robust applications suited to the user’s needs. Although I've learned many tools from my mathematics courses at UCSD, an internship working under mechanical engineers, an iOS development Bootcamp, and most recently a full stack web development Bootcamp, I believe the biggest takeaway from my studies is the ability to teach myself new things quickly.
            </p>

          </div>
        </div>
      </div>
    );
  }
} 