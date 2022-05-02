import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { createBrowserHistory } from 'history';
import { HomeScreen } from '../components/HomeScreen';

const history = createBrowserHistory();

export const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/" component={HomeScreen} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
