import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

//Import bootstrap first so we don't overwrite our own styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import Main from './components/Main';
import Blog from './components/Blog';
import DatabaseGUI from './components/DatabaseGUI';
import NotFound from './components/NotFound';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact render={props => <Main {...props} />} />
            <Route path="/blog" render={props => <Blog {...props} />} />
            <Route path="/api/gui" exact render={props => <DatabaseGUI {...props} />} />
            <Route path="*" render={props => <NotFound {...props} />} />
        </Switch>
    </BrowserRouter>
);

