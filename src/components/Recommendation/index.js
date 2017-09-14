/** @file - this component manages the recommendation quotation on the main page */
import React from "react";

import './style.css';
import felipe from '../utilities/img/felipe.png';

export default class Recommendation extends React.Component {
  render() {
    return (
      <div className="recommendation-container">
        <div className="row content">
          <div className="col-md-8 col-md-offset-2 text-center">
            <blockquote id="quote">"As one of the top students in the class, Jon demonstrated a firm grasp of programming principles as well as the ability to learn on his own, given a set of tools and a place to start from."</blockquote>
            <img id="felipe-img" src={felipe} alt="felipe" />
          </div>
        </div>
      </div>
    );
  }
}