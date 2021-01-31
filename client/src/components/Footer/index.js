import React from 'react';

import './style.css';

export default class Footer extends React.Component {

    render() {
        return (
            <footer className="row ">
                <div className="col-md-12 text-center">
                    <p>Version 3.0 - 2/1/21</p>
                    <p><a href="https://github.com/jdlee022/Portfolio-React" target="__blank">View source code</a>
                    </p>
                    <p>Built from scratch with Node, React, Express, and MySQL.</p>
                </div>
            </footer>
        );
    }
}