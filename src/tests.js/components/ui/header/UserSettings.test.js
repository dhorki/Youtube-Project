import React, { useReducer } from 'react';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { createBrowserHistory } from 'history';
import { environmentActions, styles } from '../../../../constants/constants';
import { EnvironmentContext } from '../../../../contexts/EnvironmentContext';
import { UserSettings } from '../../../../components/ui/header/UserSettings';
import { renderHook, act } from '@testing-library/react-hooks';
import { appReducer } from '../../../../reducers/appReducer';

describe('UserSettings', () => {
  const environment = {
    theme: styles.colors.light,
    sidebarShow: false,
    q: '',
  };

  it('should render correctly', () => {
    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <Router history={createBrowserHistory()}>
          <UserSettings />
        </Router>
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle change theme to dark', () => {
    const { result } = renderHook(() => useReducer(appReducer, environment));
    const [prevEnv] = result.current;
    const dispatchEnv = jest.fn();

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment: prevEnv, dispatchEnv }}>
        <UserSettings />
      </EnvironmentContext.Provider>
    );

    act(() => {
      wrapper.find('button').simulate('click');
    });

    const action = {
      type: environmentActions.setTheme,
      payload: { theme: styles.colors.dark },
    };

    expect(dispatchEnv).toHaveBeenCalled();
    expect(dispatchEnv).toHaveBeenCalledWith(action);
  });

  it('should handle change theme to light', () => {
    environment.theme = styles.colors.dark;
    const { result } = renderHook(() => useReducer(appReducer, environment));
    const [prevEnv] = result.current;
    const dispatchEnv = jest.fn();

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment: prevEnv, dispatchEnv }}>
        <UserSettings />
      </EnvironmentContext.Provider>
    );

    act(() => {
      wrapper.find('button').simulate('click');
    });

    const action = {
      type: environmentActions.setTheme,
      payload: { theme: styles.colors.light },
    };

    expect(dispatchEnv).toHaveBeenCalled();
    expect(dispatchEnv).toHaveBeenCalledWith(action);
  });
});
