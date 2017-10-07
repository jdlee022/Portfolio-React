import React from 'react';

import './style.css';

export default class Footer extends React.Component {

    render() {
        return (
            <footer className="row ">
                <div className="col-md-12 text-center">
                    <p>Version 2.0 - 10/6/17</p>
                    <p><a href="https://github.com/jdlee022/Portfolio-React" target="__blank">View source code</a>
                    </p>
                    <p>Built from scratch with Node, React, and MySQL.</p>
                </div>
            </footer>
        );
    }
}