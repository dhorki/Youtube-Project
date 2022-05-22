import React, { useReducer } from 'react';
// import { Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { styles } from '../../../../constants/constants';
import { EnvironmentContext } from '../../../../contexts/EnvironmentContext';
import { SearchInput } from '../../../../components/ui/header/SearchInput';
import { renderHook, act } from '@testing-library/react-hooks';
import { appReducer } from '../../../../reducers/appReducer';
import { Router } from 'react-router-dom';

describe('SearchInput', () => {
  let environment;

  beforeEach(() => {
    environment = {
      theme: styles.colors.light,
      sidebarShow: false,
      q: '',
    };
  });

  it('should render correctly', () => {
    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <SearchInput />
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle input change', () => {
    const { result } = renderHook(() => useReducer(appReducer, environment));
    const [prevEnv, dispatchEnv] = result.current;
    const { q: prevQ } = prevEnv;

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment: prevEnv, dispatchEnv }}>
        <SearchInput />
      </EnvironmentContext.Provider>
    );

    const value = 'wizeline';
    act(() => {
      wrapper.find('input').simulate('change', {
        target: {
          value,
          name: 'q',
        },
      });
    });

    const [env] = result.current;
    const { q } = env;

    expect(q).not.toEqual(prevQ);
    expect(q).toEqual(value);
  });

  it('should handle input clear on click', () => {
    environment.q = 'some random query';
    const { result } = renderHook(() => useReducer(appReducer, environment));
    const [prevEnv, dispatchEnv] = result.current;
    const { q: prevQ } = prevEnv;

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment: prevEnv, dispatchEnv }}>
        <SearchInput />
      </EnvironmentContext.Provider>
    );

    act(() => {
      wrapper.find('.clear-button').simulate('click');
    });

    const [env] = result.current;
    const { q } = env;

    expect(q).not.toEqual(prevQ);
    expect(q.length).toEqual(0);
  });

  it('should handle valid search on submit', () => {
    environment.q = 'some random query';
    const { result } = renderHook(() => useReducer(appReducer, environment));
    const [prevEnv, dispatchEnv] = result.current;
    const { q } = prevEnv;

    const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment: prevEnv, dispatchEnv }}>
        <Router history={historyMock}>
          <SearchInput />
        </Router>
      </EnvironmentContext.Provider>
    );

    act(() => {
      wrapper.find('.search-button').simulate('click');
    });

    expect(historyMock.push).toHaveBeenCalledWith(`/?q=${q}`);
  });

  it('should handle empty search on submit', () => {
    const { result } = renderHook(() => useReducer(appReducer, environment));
    const [prevEnv, dispatchEnv] = result.current;
    const { q } = prevEnv;

    const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment: prevEnv, dispatchEnv }}>
        <Router history={historyMock}>
          <SearchInput />
        </Router>
      </EnvironmentContext.Provider>
    );

    act(() => {
      wrapper.find('.search-button').simulate('click');
    });

    expect(historyMock.push).toHaveBeenCalledWith(`/`);
  });
});
