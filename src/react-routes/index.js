/** @file - contains all of the routes for our react app */
import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import Main from '../components/Main';
import Blog from '../components/Blog';
import NotFound from '../components/NotFound';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact render={props => <Main {...props} />} />
            <Route path="/blog" exact render={props => <Blog {...props} />} />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);