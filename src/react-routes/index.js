/** @file - contains all of the routes for our react app */
import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import Main from '../components/Main';
import Blog from '../components/Blog';
import DatabaseGUI from '../components/DatabaseGUI';
import NotFound from '../components/NotFound';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact render={props => <Main {...props} />} />
            <Route path="/blog" render={props => <Blog {...props} />} />
            <Route path="/blog/api/gui" exact render={props => <DatabaseGUI {...props} />} />
            <Route path="*" render={props => <NotFound {...props} />} />
        </Switch>
    </BrowserRouter>
);