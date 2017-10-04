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
import { Route } from 'react-router-dom';
import BlogHome from './BlogHome';
import Navbar from '../Navbar';
import Footer from '../Footer';
import PostPage from './PostPage';

import './style.css';
import me from '../utilities/img/me.png';

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
                            <h4 id="blog-sub-header">Web development, the MERN stack, and more...</h4>
                        </div>
                    </div>


                    <div className="row">
                        <hr />
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <a href="/archive" id="archive-link">Archive</a>
                            <input type="text" className="form-control form-control-inline" id="archive-search" placeholder="Search" />
                        </div>
                    </div>
                    <div className="row">
                        <hr />
                    </div>
                </header>

                <div className="blog-content row">
                    <div className="post-preview-container col-md-9">
                        <Route exact={true} path="/blog" component={BlogHome} />
                        <Route  path="/blog/post/:id" render={({match}) => (
                            <PostPage id={match.params.id}/>
                        )} />
                    </div>
                    <div className="sidebar col-md-3">

                        <img id="sidebar-img" src={me} alt="Jon Lee" />
                        <p>Continually procrastinate inexpensive e-commerce with progressive methodologies. Dramatically expedite client-focused applications vis-a-vis next-generation ideas. Synergistically productivate unique growth strategies for effective content. Intrinsicly negotiate an expanded array of mindshare before client-centered manufactured products. Proactively build robust leadership whereas pandemic information.

                    Dynamically brand interdependent "outside the box" thinking after granular outsourcing. Synergistically engineer transparent content before ethical manufactured products.</p>
                    </div>
                </div>


                <Footer />
            </div>
        );
    }
}