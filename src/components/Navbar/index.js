/**
 * @file - this component manages the navbar. Currently disabled for mobile.
 */
import React from 'react';
import $ from 'jquery';
import ScrollEvent from 'react-onscroll';

import "./style.css";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: ["Home", "About", "Projects", "Connect"]
    }
    this.scrollToSection = this.props.scrollToSection.bind(this);
    this.displayNav = this.displayNav.bind(this);
    this.handleScrollCallback = this.handleScrollCallback.bind(this);
  }

  /** Collapse the navbar when scrolling */
  handleScrollCallback() {
    // Do not apply for mobile
    if (window.innerWidth > 770) {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
    }
  }

  /** Return the navbar to display if width greater than mobile */
  displayNav() {
    if (window.innerWidth > 770) {
      // Generate the navbar links based on this component's state
      const linkItems = this.state.links.map((link, index) =>
        <li key={index} className="link page-scroll"><a onClick={() => this.scrollToSection(link)}>{link}</a></li>
      );

      return <nav className="navbar navbar-custom top-nav-collapse navbar-fixed-top">
        <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
          <ul className="nav navbar-nav">
            {linkItems}
          </ul>
        </div>
      </nav>;
    }
  }

  render() {
    return (
      <div>
        <ScrollEvent handleScrollCallback={this.handleScrollCallback} />
        {this.displayNav()}
      </div>
    );
  }
}

