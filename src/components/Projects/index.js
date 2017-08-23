import React from 'react';

import './style.css';
import philScreenshot from '../utilities/img/phil-screenshot.png';

export default class Projects extends React.Component {

  render() {
    return (
      <div className="container projects-container">
        <div className="row">
          <div className="projects-header col-md-12 text-center">
            <h1 id="projects-title">Projects</h1>
            <p id="projects-subtitle">
              Check out my code on <a href="https://github.com/jdlee022" target="__blank">GitHub</a>.
              <br />
              Note that some project links will take extra long for the initial launch due to Heroku deployment.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 ">
            <h1 ><a id="phil-title" href="http://phil9000.herokuapp.com/" target="__blank">Phil</a></h1>
            <p id="phil-text">
              A philosophy discussion forum built as a responsive single page web app with the MERN stack.
The front-end was made with Bootstrap and React, back-end with Node, Express, and MongoDB.
Within 3 weeks, designed wireframes, implemented user login, built a relational database, and provided a RESTful API for the scalable front-end to dynamically generate a reusable UI via AJAX.
            </p>
            <br />
            <p>Technologies used: Node, Express, MongoDB, React, Bootstrap</p>
          </div>
          <div className="col-md-6 ">
            <a href="http://phil9000.herokuapp.com/" target="__blank"><img src={philScreenshot} alt="phil screenshot" /></a>
          </div>
        </div>
      </div>
    )
  }
}