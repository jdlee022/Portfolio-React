/**
 * @file - this component manages the Connect section at the bottom of the main page.
 */
import React from 'react';

import './style.css';
import linkedinIcon from '../utilities/img/linkedin-icon.png';
import githubIcon from '../utilities/img/github-icon.png';
import rymIcon from '../utilities/img/rym-icon.png';

export default class Connect extends React.Component {

  render() {
    return (
      <div className="connect-container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <h1 id="connect-title">Connect</h1>
            
            <div className="connect-text">
              <p>The best way to contact me is to send me an email.</p>
              <div id="email-link">
                <a href="mailto:jdlee022@gmail.com" target="__blank">jdlee022@gmail.com</a>
              </div>
              <p>Feel free to add me on LinkedIn, inspect my code on GitHub, or talk music with me over at Rate Your Music.</p>
            </div>

            <div id="connect-icons">
              <a href="https://www.linkedin.com/in/jon-lee/" target="__blank"><img src={linkedinIcon} alt="linkedin icon" /></a>
              <a href="https://github.com/jdlee022" target="__blank"><img src={githubIcon} alt="github icon" /></a>
              <a href="https://rateyourmusic.com/~jdlee022" target="__blank"><img src={rymIcon} alt="rym icon" /></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}