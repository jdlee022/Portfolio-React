
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
              I discovered my passion for application development at an iOS Bootcamp in the summer of 2016, before my 4th year as an applied mathematics student at the University of California, San Diego. Building a practical application that anyone can download and interact with in just 5 weeks is the most thrilling achievement in my academic career and something that I never thought possible as a mathematician. This realization motivated me to enroll in as many software development courses as possible, along with a Full Stack Web Development Bootcamp while I finished off my BS in applied mathematics. Since then, I've continued to build personal projects like this portfolio website while I search for a position as a Web Developer in Seattle, WA.
            </p>

          </div>
        </div>
      </div>
    );
  }
} 