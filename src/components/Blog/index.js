/**
 * @file - 
 * 
 * TODO: 
 * Refactor React-Router and the App component, may need to fiddle with Navbar, Footer, and Main components.
 * Have a main blog page that lists all blog posts with excerpts. Clicking on a post title takes you to the blog post page which shows the entire post.t
 * 
 */

import React from 'react';
import Navbar from '../Navbar';

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
                    <div className="col-md-9">
                        <p>Intrinsicly exploit user-centric convergence whereas just in time e-markets. Efficiently disintermediate process-centric testing procedures without accurate processes. Collaboratively extend e-business content through cross-media customer service. Dynamically parallel task leveraged expertise vis-a-vis market-driven methods of empowerment. Holisticly expedite synergistic vortals with synergistic ROI.

                        Interactively plagiarize quality process improvements with fully tested technologies. Assertively procrastinate accurate quality vectors after global best practices. Authoritatively formulate synergistic ROI whereas user friendly growth strategies. Compellingly parallel task timely experiences whereas impactful interfaces. Authoritatively embrace standardized e-tailers for value-added supply chains.

                        Enthusiastically empower open-source core competencies without B2C ideas. Intrinsicly integrate resource maximizing data rather than high-quality catalysts for change. Uniquely deliver reliable strategic theme areas without team building portals. Seamlessly target state of the art process improvements and bleeding-edge methods of empowerment. Compellingly initiate compelling technology whereas efficient infrastructures.

                        Progressively harness 2.0 e-markets via interactive paradigms. Progressively evisculate covalent leadership via compelling metrics. Efficiently customize maintainable value vis-a-vis pandemic.</p>
                    </div>
                    <div className="sidebar col-md-3">

                        <img id="sidebar-img" src={me} alt="Jon Lee" />
                        <p>Continually procrastinate inexpensive e-commerce with progressive methodologies. Dramatically expedite client-focused applications vis-a-vis next-generation ideas. Synergistically productivate unique growth strategies for effective content. Intrinsicly negotiate an expanded array of mindshare before client-centered manufactured products. Proactively build robust leadership whereas pandemic information.

                    Dynamically brand interdependent "outside the box" thinking after granular outsourcing. Synergistically engineer transparent content before ethical manufactured products.</p>
                    </div>
                </div>
            </div>
        );
    }
}