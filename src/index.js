/** 
 * @file this is the entry point to our react app.
 * We import all of the components used in routing, 
 * define our routes, and call ReactDOM to render the view.
 */

//Import bootstrap first so we don't overwrite our own styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
//import React dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
//Import all of our components to configure react-router
import Main from './components/Main';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Main}>
    </Route>
  </Router>
);

//Entry point to our app via react-router
ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);