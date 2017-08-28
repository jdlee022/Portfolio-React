import React from 'react';

import './style.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToSection = this.props.scrollToSection.bind(this);
  }

  render() {
    return (
      <header className="intro">
        <div className="intro-body">
          <div className="container home-container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <p className="intro-text">Hi, I'm Jon. I design and build responsive web applications.</p>
              </div>
            </div>

            
          </div>
        </div>
        <a id="learn-more" onClick={() => this.scrollToSection("Skills")}>
              Learn more<br />
              <i className="glyphicon glyphicon-chevron-down"></i>
            </a>
      </header>
    );
  }
}