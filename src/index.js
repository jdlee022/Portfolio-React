/** 
 * @file this is the entry point to our react app.
 * We import all of the components used in routing, 
 * define our routes, and call ReactDOM to render the view.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();