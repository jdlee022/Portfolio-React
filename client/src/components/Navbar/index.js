/**
 * @file - this component manages the navbar. Currently disabled for mobile.
 */
import React from 'react';
import $ from 'jquery';
// import { Link } from 'react-router-dom';
import ScrollEvent from 'react-onscroll';
import { HashLink as Link } from 'react-router-hash-link';

import "./style.css";

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: ["Home", "About", "Projects", "Connect", "Blog"]
        }
        this.displayNav = this.displayNav.bind(this);
        this.handleScrollCallback = this.handleScrollCallback.bind(this);
        this.scrollToSection = this.scrollToSection.bind(this);
    }

    /** Force the components to update when the window resizes.
     * This is important when browser reaches mobile width.
     */
    handleResize = () => {
        this.forceUpdate();
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    
    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize);
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

    /** Collapse the navbar when scrolling */
    handleScrollCallback() {
        // Do not apply for mobile
        if (window.innerWidth > 7) {
            if ($(".navbar").offset().top > 50) {
                $(".navbar-fixed-top").addClass("top-nav-collapse");
            } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }
        }
    }

    /** Return the navbar to display based on view width */
    displayNav() {
        // Generate the navbar links based on this component's state
        var linkItems = this.state.links.map((link, index) => {
            // The Blog link in the navbar will always route to /blog
            if (link === "Blog") {
                return <li key={index} className="link"><Link to="/blog">{link}</Link></li>;
            }
            // If we are on the blog "page" then we route to the id of the corresponding section on the main page
            // The react-router-hash-link package lets us scroll straight to the section w/ id
            if (window.location.pathname.includes("/blog")) {
                var query = "/#" + link;
                return <li key={index} className="link page-scroll"><Link to={query}>{link}</Link></li>;
            }
            // If we are already on main page then use the animated scroll function
            else {
                return <li key={index} className="link page-scroll"><a onClick={() => this.scrollToSection(link)}>{link}</a></li>;
            }
        });
        if (window.innerWidth > 770) {


            return <nav className="navbar navbar-custom top-nav-collapse navbar-fixed-top">
                <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                    <ul className="nav navbar-nav">
                        {linkItems}
                    </ul>
                </div>
            </nav>;
        }
        // mobile nav
        else {
            return <nav className="mobile-nav navbar navbar-custom">
                <div className="mobile-nav-div">
                    <ul className="mobile-nav-ul">
                        {linkItems.reverse()}
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