/** @file - this component manages the recommendation quotation on the main page */
import React from "react";

import './style.css';

export default class Recommendation extends React.Component {

  render() {
    return (
      <div className="recommendation-container">
        <div className="row req-row">
          <div className="req-col col-md-10 col-md-offset-1 text-center">
            <blockquote id="quote">{this.props.recQuote}</blockquote>
            <img id="rec-img" src={this.props.recImg} alt="recommender" />
          </div>
        </div>
      </div>
    );
  }
}