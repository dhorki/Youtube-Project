import React from 'react';
import { Router, Switch, Route /*, Redirect */ } from 'react-router-dom';
// import { AuthRouter } from './AuthRouter';
import { createBrowserHistory } from 'history';
import { GalleryScreen } from '../pages/GalleryScreen';

const history = createBrowserHistory();

export const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          {/* <Route path="/auth" component={AuthRouter} /> */}
          <Route exact path="/favorites" component={GalleryScreen} />
          <Route exact path="/" component={GalleryScreen} />
          {/* <Redirect to="/auth/login" /> */}
        </Switch>
      </div>
    </Router>
  );
};
