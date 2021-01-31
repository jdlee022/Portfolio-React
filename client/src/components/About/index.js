
import React from 'react';
import Recommendation from '../Recommendation';

import './style.css';
import aboutPic from '../utilities/img/aboutPic.png';
import felipe from '../utilities/img/felipe.png';
import stacey from '../utilities/img/stacey.png';
export default class About extends React.Component {

  render() {
    return (
      <div className="about-container">
        <div className="row">
        <div className="col-md-6">
            <h1 id="about-header">About Me</h1>
            <p id="about-text">
              I discovered my passion for application development at an iOS Bootcamp in the summer of 2016, before my 4th year as an applied mathematics student at the University of California, San Diego. Building a practical application that anyone can download and interact with in just 5 weeks was the most thrilling achievement in my academic career, so I went on to enroll in a Full Stack Web Development Bootcamp while I finished off my BS in applied mathematics. Since then, I've continued to build personal projects and have been working for an AI demand forecasting company, <a className="dark-yellow-link" href="https://www.oneclick.ai/home/" target="_blank">OneClick.ai</a>, since 2017.
            </p>
          </div>
          <div className="col-md-6">
          <h1 id="about-header">Testimonials</h1>
          <Recommendation className="recommendation" recQuote="&quot;Jon has a true talent in problem solving and mastering challenging material quickly. He will not disappoint in his technical skills nor his ability to work collaboratively within a team.&quot;" recImg={stacey} />
          <Recommendation className="recommendation" recQuote="&quot;As one of the top students in the class, Jon demonstrated a firm grasp of programming principles as well as the ability to learn on his own, given a set of tools and a place to start from.&quot;" recImg={felipe} />
          </div>
        </div>
      </div>
    );
  }
} 