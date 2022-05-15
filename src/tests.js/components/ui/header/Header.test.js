import React, { useReducer } from 'react';
import { Router } from 'react-router-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { createBrowserHistory } from 'history';
import { styles } from '../../../../constants/constants';
import { EnvironmentContext } from '../../../../contexts/EnvironmentContext';
import { Header } from '../../../../components/ui/header/Header';
import { appReducer } from '../../../../reducers/appReducer';

describe('Header', () => {
  const environment = {
    theme: styles.colors.light,
    sidebarShow: false,
    q: '',
  };

  it('should render correctly with collapsed sidebar', () => {
    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <Router history={createBrowserHistory()}>
          <Header />
        </Router>
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with expanded sidebar', () => {
    environment.sidebarShow = true;

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <Router history={createBrowserHistory()}>
          <Header />
        </Router>
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should dispatch set sidebar show action on button click', () => {
    const { result } = renderHook(() => useReducer(appReducer, environment));
    const [prevEnv, dispatchEnv] = result.current;
    const { sidebarShow: prevSidebarShow } = prevEnv;

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment: prevEnv, dispatchEnv }}>
        <Router history={createBrowserHistory()}>
          <Header />
        </Router>
      </EnvironmentContext.Provider>
    );

    act(() => {
      wrapper.find('#sidebarToggler').simulate('click');
    });

    const [env] = result.current;
    const { sidebarShow } = env;

    expect(sidebarShow).toEqual(!prevSidebarShow);
  });

  it('should reset search query on app link click', () => {
    environment.q = 'some search query';

    const { result } = renderHook(() => useReducer(appReducer, environment));
    const [prevEnv, dispatchEnv] = result.current;
    const { q: prevQ } = prevEnv;

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment: prevEnv, dispatchEnv }}>
        <Router history={createBrowserHistory()}>
          <Header />
        </Router>
      </EnvironmentContext.Provider>
    );

    act(() => {
      wrapper.find('a.app-link').simulate('click');
    });

    const [env] = result.current;
    const { q } = env;

    expect(q).not.toEqual(!prevQ);
    expect(q.length).toEqual(0);
  });
});
