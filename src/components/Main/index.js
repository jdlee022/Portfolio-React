import React from 'react';
import ReactDOM from 'react-dom';
import ScrollEvent from 'react-onscroll';
import $ from 'jquery';

// Child component's to be rendered
import Navbar from '../Navbar';
import Home from '../Home';

import './style.css';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleScrollCallback = this.handleScrollCallback.bind(this);
  }

  /**
   * 
   */
  handleScrollCallback(){
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  }


  render() {
    return (
      <div className="container-fluid main-container">
        <ScrollEvent handleScrollCallback={this.handleScrollCallback} />

        <Navbar />

        <div id="Home" className="intro-section">
          <Home />
        </div>

        <section id="About" className="about-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>About Section</h1>
              </div>
            </div>
          </div>
        </section>

        <section id="Projects" className="services-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Services Section</h1>
              </div>
            </div>
          </div>
        </section>

        <section id="Connect" className="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Contact Section</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}