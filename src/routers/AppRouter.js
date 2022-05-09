import React, { useContext } from 'react';
import { Router, Switch, Route /*, Redirect */ } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { createBrowserHistory } from 'history';
import { Header } from '../components/ui/header/Header';
import { StyledContainer, StyledMain } from '../styles/pages/Common';
import { Sidebar } from '../components/ui/sidebar/Sidebar';
import { StyledMainView } from '../styles/components/ui/MainView';
import { useTheme } from '../hooks/useTheme';
import { EnvironmentContext } from '../contexts/EnvironmentContext';
import { GalleryScreen } from '../pages/GalleryScreen';
import { ViewVideoScreen } from '../pages/ViewVideoScreen';

const history = createBrowserHistory();

export const AppRouter = () => {
  const { getTheme } = useTheme();
  const theme = getTheme();

  const { sidebarShow } = useContext(EnvironmentContext);

  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
        </Switch>
        <StyledContainer>
          <Header />
          <StyledMain>
            <Sidebar />
            <StyledMainView theme={theme} sidebarShow={sidebarShow}>
              <div className="main-container">
                <Switch>
                  <Route exact path="/" component={GalleryScreen} />
                  <Route exact path="/favorites" component={GalleryScreen} />
                  <Route exact path="/:videoId" component={ViewVideoScreen} />
                  {/* <Redirect to="/auth/login" /> */}
                </Switch>
              </div>
            </StyledMainView>
          </StyledMain>
        </StyledContainer>
      </div>
    </Router>
  );
};
