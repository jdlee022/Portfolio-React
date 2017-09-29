/**
 * @file - this component is the main container for all other components.
 * All content for the main page is imported and rendered here.
 */
import React from 'react';

import './style.css';
// Child component's to be rendered
import Navbar from '../Navbar';
import Home from '../Home';
import Skills from '../Skills';
import About from '../About';
import Projects from '../Projects';
import Connect from '../Connect';



export default class Main extends React.Component {

    render() {
        return (
            <div className="container-fluid main-container">
                <Navbar />

                <section id="Home" >
                    <Home />
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

                <section id="Connect">
                    <Connect />
                </section>

                <footer className="row text-center">
                    <p>Version 1.2.0 - 9/21/17</p>
                    <p><a href="https://github.com/jdlee022/Portfolio-React" target="__blank">View source code</a>
                    </p>
                    <p>Built from scratch with Node and React.</p>
                </footer>
            </div>
        );
    }
}