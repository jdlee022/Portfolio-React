import React from 'react';
import { Parallax } from 'react-parallax';

import './style.css';
import philScreenshot from '../utilities/img/phil-screenshot.png';
import philBackground from '../utilities/img/phil-background.jpg';
import synthLordScreenshot from '../utilities/img/synth-lord-screenshot.png';
import synthLordBackground from '../utilities/img/synth-lord-background.png';
import scaleGeniusBackground from '../utilities/img/scalegenius-background.png';
import scaleGeniusScreenshot from '../utilities/img/scalegenius-screenshot.png';

export default class Projects extends React.Component {

  render() {
    return (
      <div className="container-fluid projects-container">
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

        <Parallax bgImage={philBackground} strength={400}>
          <div className="row">
            <div className="col-md-6 project-text">
              <h1 ><a id="phil-title" href="http://phil9000.herokuapp.com/" target="__blank">Phil</a></h1>
              <p>
                Phil is a philosophy discussion forum built as a responsive single page web app with the MERN stack. The project was completed in 3 weeks with a team of 4 developers in an intensive coding Bootcamp. I personally designed wireframes, implemented user login, built a relational database, and provided a RESTful API for the scalable front-end to dynamically generate a reusable UI via AJAX. In essence, I built the Home and Discuss pages of the website.
            </p>
              <br />
              <p>Technologies used: Node, Express, MongoDB, React, Bootstrap</p>
              <a href="https://github.com/jdlee022/Phil" target="__blank"><p>Source code</p></a>
            </div>
            <div className="col-md-6 text-center">
              <a href="http://phil9000.herokuapp.com/" target="__blank"><img className="project-screenshot" src={philScreenshot} alt="phil screenshot" /></a>
            </div>
          </div>
        </Parallax>

        <Parallax bgImage={synthLordBackground} strength={400}>
          <div className="row">
            <div className="col-md-6 project-text">
              <h1 ><a className="synth-lord-link" href="https://synthlord.herokuapp.com/" target="__blank">Synth Lord</a></h1>
              <p>
                Synth Lord is a web based synthesizer with MIDI support. It uses the Web Audio API to manipulate sound in the web browser, essentially providing the software component of a synthesizer to MIDI controllers which comprise the hardware component. The computer keys (starting with asdf) can also be used to play notes and are all you need to begin experimenting with some wacky sounds.
              <br /><br />
                This project was created in 2 weeks with a team of 4 people. Most of my time on the front-end was spent programming the keyboard and audio manipulation, while my back-end code embodies the preset data storage with MySQL.
                Note: Synth Lord has only been tested for Google Chrome compatibility so other browsers may not function as expected.
            </p>
              <br />
              <p>Technologies used: Node, Express, MySQL, Amazon Web Services S3, Web Audio API, Bootstrap</p>
              <a className="synth-lord-link" href="https://github.com/jdlee022/Synth-Lord" target="__blank"><p>Source code</p></a>
            </div>
            <div className="col-md-6 text-center">
              <a href="https://synthlord.herokuapp.com/" target="__blank"><img className="project-screenshot" src={synthLordScreenshot} alt="synth lord screenshot" /></a>
            </div>
          </div>
        </Parallax>

        <Parallax bgImage={scaleGeniusBackground} strength={400}>
          <div className="row">
            <div className="col-md-6 project-text">
              <h1 ><a className="scalegenius-link" href="https://itunes.apple.com/us/app/scalegenius-scales-for-alternate-guitar-tunings/id1141755821?mt=8" target="__blank">ScaleGenius</a></h1>
              <p>
                ScaleGenius is an easy-to-use reference guide for guitar players who like to experiment and practice with alternate tunings. This mobile app was developed in an 8-week iOS Bootcamp in which I learned the Swift programming language from scratch and built my own app which can be found on the iOS App Store by searching <a className="scalegenius-link" href="https://itunes.apple.com/us/app/scalegenius-scales-for-alternate-guitar-tunings/id1141755821?mt=8" target="__blank">"ScaleGenius"</a>.
            </p>
              <br />
              <p>Technologies used: Swift, Xcode, Sketch, Balsamiq</p>
              <a className="scalegenius-link" href="https://github.com/jdlee022/ScaleGenius" target="__blank"><p>Source code</p></a>
            </div>
            <div className="col-md-6 text-center">
              <a href="https://itunes.apple.com/us/app/scalegenius-scales-for-alternate-guitar-tunings/id1141755821?mt=8" target="__blank"><img className="project-screenshot" src={scaleGeniusScreenshot} alt="scalegenius screenshot" /></a>
            </div>
          </div>
        </Parallax>
      </div>
    )
  }
}