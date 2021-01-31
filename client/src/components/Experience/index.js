import React from 'react';
import { Parallax } from 'react-parallax';

import Recommendation from '../Recommendation';

import './style.css';
import oneclickScreenshot from '../utilities/img/oneclickai_pulse.png';

export default class Experience extends React.Component {

  render() {
    return (
      <div className="projects-container">
        <div className="row">
          <div className="experience-header col-md-12 text-center">
            <h1 id="experience-title">Experience</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 project-text">
            <h1 ><a id="oneclick-title" href="https://www.oneclick.ai/home/oneclick-forecast/" target="__blank">OneClick.ai</a></h1>
            <p className="experience-date">December 2017 - Current</p>
            <p>
              OneClick.ai is an augmented forecasting application using advanced machine learning and external data to uncover complex demand patterns within businesses' data, turning data visibility into actionable insights. As the sole web developer in an early stage startup, I built the entire frontend of the web app from scratch, including major features like an online payment system, user collaboration with chat messaging, localization, and complex data visualization. Also aided in several backend tasks such as database management, WebSocket development, RESTful request handling, and debugging in a Kubernetes & Docker production environment.
            </p>
            <br />
            <p>
              Collaborated closely with senior developers to deliver custom features for clients, and frequently participated in meetings to decide the direction of the company. Worked in a fast-paced agile environment to consistently deliver new features and meet deadlines.
            </p>
            <br />
            <p>Technologies used: React, Material UI, Node, Django, MySQL, Stripe, Docker, Kubernetes</p>
            <a href="https://www.oneclick.ai/home/oneclick-forecast/" target="__blank"><p>Website</p></a>
          </div>
          <div className="col-md-6 experience-img text-center">
            <a href="https://www.oneclick.ai/home/oneclick-forecast/" target="__blank"><img className="project-screenshot experience-screenshot" src={oneclickScreenshot} alt="oneclick.ai screenshot" /></a>
          </div>
        </div>
      </div>
    )
  }
}