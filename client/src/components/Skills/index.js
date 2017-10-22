/** @file - manages the skills section on the main page.
 * Also imports and renders the skill bubble cloud.
 */
import React from 'react';

import './style.css';
import ideationLogo from '../utilities/img/ideation.png';
import designLogo from '../utilities/img/design.png';
import developmentLogo from '../utilities/img/development.png';
import teamworkLogo from '../utilities/img/teamwork.png';
import bubble from '../utilities/img/bubble.png';
import bubbleMobile from '../utilities/img/bubble-mobile.png';

export default class Skills extends React.Component {

    render() {
        return (
            <div className="skills-container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center">
                        <h1 id="skills-header">Skills</h1>
                    </div>
                </div>

                <div className="row skills-row">
                    <div className="col-md-3 text-center">
                        <img src={ideationLogo} alt="ideation logo" />
                        <br />
                        <h4>Ideation</h4>
                        <p>I adopt a human centered design approach to problem solving, collaborating closely with end users to better understand their needs and wants to create informed original ideas and maximize success.</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={designLogo} alt="design logo" />
                        <br />
                        <h4>Design</h4>
                        <p>I draft and wireframe interfaces with Balsamiq and Sketch 3, spending ample time planning 	content structure and UI/UX in order to ensure a smooth development phase.</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={developmentLogo} alt="development logo" />
                        <br />
                        <h4>Development</h4>
                        <p>I program full stack applications from the ground up, typically employing Node, Express, MongoDB, React, and Bootstrap. I also love learning new technologies whenever they happen to be a good fit for the project I’m working on.</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={teamworkLogo} alt="teamwork logo" />
                        <br />
                        <h4>Teamwork</h4>
                        <p>I thrive in team environments by facilitating communication and promoting peer programming, as I believe it's an effective way to provide team members with a better understanding of how each other's code works together cohesively.</p>
                    </div>
                </div>

                <div className="row text-center bubble-row">
                    <div className="col-md-12 text-center">
                        <img className="bubble bubble-desktop" src={bubble} alt="bubble" />
                        <img className="bubble bubble-mobile" src={bubbleMobile} alt="bubble" />
                    </div>

                </div>
            </div>
        );
    }
} 