import React from 'react';
import ScrollEvent from 'react-onscroll';
import $ from 'jquery';

// Child component's to be rendered
import Navbar from '../Navbar';
import Home from '../Home';
import Skills from '../Skills';
import About from '../About';
import Projects from '../Projects';
import Recommendation from '../Recommendation';
import Connect from '../Connect';
import './style.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleScrollCallback = this.handleScrollCallback.bind(this);
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  /**
   * We use jQuery to scroll to an element by id
   * @param linkName - the id of the element we want to scroll to
   */
  scrollToSection(linkName) {
    $('html, body').animate({
      scrollTop: $("#" + linkName).offset().top
    }, 850);
  }

  /**
   * 
   */
  handleScrollCallback() {
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

        <Navbar scrollToSection={this.scrollToSection} />

        <section id="Home" >
          <Home scrollToSection={this.scrollToSection} />
        </section>

        <section id="Skills">
          <Skills />
        </section>

        <section id="About" >
          <About />
        </section>

        <section id="Projects" >
          <Projects />
        </section>

        <section id="Recommendation">
          <Recommendation />
        </section>

        <section id="Connect">
          <Connect />
        </section>

        <footer className="row text-center">
          <p>Version 1.0.0 - 9/10/17</p>
          <p><a href="https://github.com/jdlee022/Portfolio-React" target="__blank">View source code</a>
          </p>
          <p>Built from scratch with Node and React.</p>
        </footer>

      </div>
    );
  }
}