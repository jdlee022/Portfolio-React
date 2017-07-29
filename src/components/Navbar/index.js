import React from 'react';
import $ from 'jquery';

import "./style.css";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: ["Home", "About", "Projects", "Connect"]
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
    console.log("inside collapseNavbar!!!");
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
      <nav className="navbar navbar-custom navbar-fixed-top" role="navigation" onScroll={this.collapseNavbar}>
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

// <nav classNameName="navbar navbar-default ">
//       <div classNameName="container">
//         <div classNameName="navbar-header page-scroll">
//           <button type="button" classNameName="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
//             <span classNameName="sr-only">Toggle navigation</span>
//             <span classNameName="icon-bar"></span>
//             <span classNameName="icon-bar"></span>
//             <span classNameName="icon-bar"></span>
//           </button>
//         </div>

//         <div classNameName="collapse navbar-collapse navbar-ex1-collapse">
//           <ul classNameName="nav navbar-nav">
//             {linkItems}
//           </ul>
//         </div>
//       </div>
//     </nav>