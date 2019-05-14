import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Easy from './containers/Easy';
import Hard from './containers/Hard';
import ScoreBoard from './containers/ScoreBoard';
import NotFound from './containers/NotFound';


export default () =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/smooth" component={Easy} />
        <Route path="/heavy" component={Hard} />
        <Route path="/scores" component={ScoreBoard} />
        <Route path="/*" component={NotFound} />
    </Switch>
