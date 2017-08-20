import React from 'react';
import ScrollEvent from 'react-onscroll';
import $ from 'jquery';

// Child component's to be rendered
import Navbar from '../Navbar';
import Home from '../Home';
import About from '../About';

import './style.css';

export default class App extends React.Component {
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

        <div id="Home" >
          <Home />
        </div>

        <section id="About" >
          <About />
        </section>

        <section id="Projects" >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Services Section</h1>
              </div>
            </div>
          </div>
        </section>

        <section id="Connect" >
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