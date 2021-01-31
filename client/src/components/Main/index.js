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
import Experience from '../Experience';
import Projects from '../Projects';
import Connect from '../Connect';
import Footer from '../Footer';



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

                <section id="Experience" >
                    <Experience />
                </section>

                <section id="Projects" >
                    <Projects />
                </section>

                <section id="About" >
                    <About />
                </section>

                <section id="Connect">
                    <Connect />
                </section>

                <Footer />

            </div>
        );
    }
}