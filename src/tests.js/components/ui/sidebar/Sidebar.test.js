import React, { useReducer } from 'react';
import { Route } from 'react-router-dom';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { styles } from '../../../../constants/constants';
import { EnvironmentContext } from '../../../../contexts/EnvironmentContext';
import { Sidebar } from '../../../../components/ui/sidebar/Sidebar';
import { renderHook, act } from '@testing-library/react-hooks';
import { appReducer } from '../../../../reducers/appReducer';
import { MemoryRouter } from 'react-router-dom';

describe('SideBar', () => {
  const environment = {
    theme: styles.colors.light,
    sidebarShow: false,
    q: '',
  };

  it('should render correctly with home route', () => {
    const mockLocation = {
      pathname: '/',
      search: '',
    };

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <MemoryRouter initialEntries={[mockLocation]}>
          <Route path="/">
            <Sidebar />
          </Route>
        </MemoryRouter>
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with favorites route', () => {
    const mockLocation = {
      pathname: '/favorites',
      search: '',
    };

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <MemoryRouter initialEntries={[mockLocation]}>
          <Route path="/favorites">
            <Sidebar />
          </Route>
        </MemoryRouter>
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should reset search query on home menu click', () => {
    environment.q = 'some search query';

    const mockLocation = {
      pathname: '/',
      search: '',
    };

    const { result } = renderHook(() => useReducer(appReducer, environment));
    const [prevEnv, dispatchEnv] = result.current;
    const { q: prevQ } = prevEnv;

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment: prevEnv, dispatchEnv }}>
        <MemoryRouter initialEntries={[mockLocation]}>
          <Sidebar />
        </MemoryRouter>
      </EnvironmentContext.Provider>
    );

    const link = wrapper.find('#sidebar-home-link').first();
    act(() => {
      link.simulate('click');
    });

    const [env] = result.current;
    const { q } = env;

    expect(q).not.toEqual(!prevQ);
    expect(q.length).toEqual(0);
  });

  it('should reset search query on favorites menu click', () => {
    environment.q = 'some search query';

    const mockLocation = {
      pathname: '/favorites',
      search: '',
    };

    const { result } = renderHook(() => useReducer(appReducer, environment));
    const [prevEnv, dispatchEnv] = result.current;
    const { q: prevQ } = prevEnv;

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment: prevEnv, dispatchEnv }}>
        <MemoryRouter initialEntries={[mockLocation]}>
          <Sidebar />
        </MemoryRouter>
      </EnvironmentContext.Provider>
    );

    const link = wrapper.find('#sidebar-favorites-link').first();
    act(() => {
      link.simulate('click');
    });

    const [env] = result.current;
    const { q } = env;

    expect(q).not.toEqual(!prevQ);
    expect(q.length).toEqual(0);
  });

  it('should have correct hrefs for menu links', () => {
    const mockLocation = {
      pathname: '/favorites',
      search: '',
    };

    const { result } = renderHook(() => useReducer(appReducer, environment));
    const [prevEnv, dispatchEnv] = result.current;

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment: prevEnv, dispatchEnv }}>
        <MemoryRouter initialEntries={[mockLocation]}>
          <Sidebar />
        </MemoryRouter>
      </EnvironmentContext.Provider>
    );

    const homeLink = wrapper.find('#sidebar-home-link').first();
    const favoritesLink = wrapper.find('#sidebar-favorites-link').first();

    expect(homeLink.prop('to')).toEqual('/');
    expect(favoritesLink.prop('to')).toEqual('/favorites');
  });
});
