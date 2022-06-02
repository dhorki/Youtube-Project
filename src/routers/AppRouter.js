import React, { useContext } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Header } from '../components/ui/header/Header';
import { StyledContainer, StyledMain } from '../styles/pages/Common';
import { Sidebar } from '../components/ui/sidebar/Sidebar';
import { StyledMainView } from '../styles/components/ui/MainView';
import { EnvironmentContext } from '../contexts/EnvironmentContext';
import { GalleryScreen } from '../pages/GalleryScreen';
import { ViewVideoScreen } from '../pages/ViewVideoScreen';
import { modalTypes } from '../constants/constants';
import { Modal } from '../components/ui/modal/Modal';

const history = createBrowserHistory();

export const AppRouter = () => {
  const { environment } = useContext(EnvironmentContext);
  const { theme, sidebarShow, modalShow, user } = environment;

  return (
    <Router history={history}>
      <div>
        <StyledContainer>
          <Header />
          <StyledMain>
            <Sidebar />
            <StyledMainView theme={theme} sidebarShow={sidebarShow}>
              <div className="main-container">
                <Switch>
                  <Route exact path="/" component={GalleryScreen} />
                  {user && <Route exact path="/favorites" component={GalleryScreen} />}
                  {user && (
                    <Route exact path="/favorites/:videoId" component={ViewVideoScreen} />
                  )}
                  <Route exact path="/:videoId" component={ViewVideoScreen} />
                  <Redirect to="/" />
                </Switch>
              </div>
            </StyledMainView>
          </StyledMain>
        </StyledContainer>
        {modalTypes.none !== modalShow && <Modal />}
      </div>
    </Router>
  );
};
