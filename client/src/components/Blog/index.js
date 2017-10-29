/**
 * @file - 
 * 
 * TODO: 
 * Refactor React-Router and the App component, may need to fiddle with Navbar, Footer, and Main components.
 * Have a main blog page that lists all blog posts with excerpts. Clicking on a post title takes you to the blog post page which shows the entire post.t
 * Add a like button.
 * 
 */
import React from 'react';
import { Route, Link } from 'react-router-dom';
import Archive from './Archive';
import Navbar from '../Navbar';
import Footer from '../Footer';
import PostPage from './PostPage';

import './style.css';
import me from '../utilities/img/me.png';
import linkedinIcon from '../utilities/img/linkedin-icon.png';
import githubIcon from '../utilities/img/github-icon.png';
import rymIcon from '../utilities/img/rym-icon.png';

export default class Blog extends React.Component {
    // Always scroll to the top when rendering a blog page
    componentDidMount() {
        window.scrollTo(0, 0);
    }



    render() {

        return (
            <div className="container blog-container">
                <Navbar />
                <header>
                    <div className="row">
                        <div className="col-md-12">
                            <h1 id="blog-header">Jon Lee</h1>
                            <h4 id="blog-sub-header">Web Developer. Blockchain Enthusiast. Music Lover.</h4>
                        </div>
                    </div>


                    <div className="row">
                        <hr />
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <Link to="/blog" id="archive-link" className="post-preview-title">Archive</Link>
                            
                        </div>
                    </div>
                    <div className="row">
                        <hr />
                    </div>
                </header>

                <div className="blog-content row">
                    <div className="post-preview-container col-md-9">
                        <Route exact={true} path="/blog" component={Archive} />
                        <Route path="/blog/post/:id" render={({ match }) => (
                            <PostPage id={match.params.id} />
                        )} />
                    </div>
                    <div className="sidebar col-md-3">

                        <img id="sidebar-img" src={me} alt="Jon Lee" />
                        <div id="blog-connect-icons">
                            <a href="https://www.linkedin.com/in/jon-lee/" target="__blank"><img src={linkedinIcon} alt="linkedin icon" /></a>
                            <a href="https://github.com/jdlee022" target="__blank"><img src={githubIcon} alt="github icon" /></a>
                            <a href="https://rateyourmusic.com/~jdlee022" target="__blank"><img src={rymIcon} alt="rym icon" /></a>
                        </div>
                        <p>I'm Jon Lee. I live in Seattle, WA. I'm a full stack JavaScript developer trained in the MERN stack. I've graduated from UC San Diego with a BS in applied mathematics, shipped my own iOS application to the App Store, and completed a full stack web development Bootcamp in July of 2017.<br /><br />
                            I'm constantly experimenting with new technologies and working to hone my skills as a developer. This blog is meant to document my research, projects, and interests, including everything from  JavaScript tutorials, to Blockchain think-pieces, to album of the year charts.
                        </p>
                    </div>
                </div>


                <Footer />
            </div>
        );
    }
}