import React from 'react';

import './style.css';

export default class Footer extends React.Component {

  render() {
    return (
      <footer>
        <p>Posted by: Hege Refsnes</p>
        <p>Contact information: <a href="mailto:someone@example.com">
          someone@example.com</a>.</p>
      </footer>
    );
  }
}