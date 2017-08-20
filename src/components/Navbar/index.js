import React from 'react';
import $ from 'jquery';

import "./style.css";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: ["Home", "About", "Projects", "Blog", "Connect"]
    }
    this.scrollToSection = this.scrollToSection.bind(this);
    this.collapseNavbar = this.collapseNavbar.bind(this);
  }

  /**
   * We use jQuery to scroll to an element by id
   * @param linkName - the id of the element we want to scroll to
   */
  scrollToSection(linkName) {
    $('html, body').animate({
      scrollTop: $("#" + linkName).offset().top
    }, 1000);
  }

  collapseNavbar(){
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  }

  render() {
    // Generate the navbar links based on this component's state
    const linkItems = this.state.links.map((link, index) =>
      <li key={index} className="link page-scroll"><a onClick={() => this.scrollToSection(link)}>{link}</a></li>
    );

    return (
      <nav className="navbar navbar-custom navbar-fixed-top" onScroll={this.collapseNavbar}>
        <div className="container">
          <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
            <ul className="nav navbar-nav">
              {linkItems}
            </ul>
          </div>
        </div>
      </nav>

    );
  }
}