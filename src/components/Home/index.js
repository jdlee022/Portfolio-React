import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <header className="intro">
        <div className="intro-body">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h1 className="brand-heading">Grayscale</h1>
                <p className="intro-text">A free, responsive, one page Bootstrap theme.
                            <br />Created by Start Bootstrap.</p>
                <a href="#about" className="btn btn-circle page-scroll">
                  <i className="fa fa-angle-double-down animated"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}