import React, { useReducer } from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { styles } from '../../../../constants/constants';
import { EnvironmentContext } from '../../../../contexts/EnvironmentContext';
import { SliderButton } from '../../../../components/ui/header/SliderButton';
import { renderHook, act } from '@testing-library/react-hooks';
import { appReducer } from '../../../../reducers/appReducer';

describe('SliderButton', () => {
  const environment = {
    theme: styles.colors.light,
    sidebarShow: false,
    q: '',
  };

  let params = {};
  beforeEach(() => {
    params = {
      label: 'slider label',
      initState: true,
      callback: jest.fn(),
    };
  });

  it('should render correctly with label', () => {
    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <SliderButton
          label={params.label}
          initState={params.initState}
          callback={params.callback}
        />
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly without label', () => {
    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <SliderButton initState={params.initState} callback={params.callback} />
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle callback on click', () => {
    environment.q = 'some random query';
    const { result } = renderHook(() => useReducer(appReducer, environment));
    const [prevEnv, dispatchEnv] = result.current;

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment: prevEnv, dispatchEnv }}>
        <SliderButton initState={params.initState} callback={params.callback} />
      </EnvironmentContext.Provider>
    );

    act(() => {
      wrapper.find('button').simulate('click');
    });

    expect(params.callback).toHaveBeenCalledWith(false);
  });

  it('should handle no callback click', () => {
    environment.q = 'some random query';
    const { result } = renderHook(() => useReducer(appReducer, environment));
    const [prevEnv, dispatchEnv] = result.current;

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment: prevEnv, dispatchEnv }}>
        <SliderButton initState={params.initState} />
      </EnvironmentContext.Provider>
    );

    act(() => {
      wrapper.find('button').simulate('click');
    });

    expect(params.callback).not.toHaveBeenCalled();
  });

  it('should handle mouse over/out', () => {
    environment.q = 'some random query';
    const { result } = renderHook(() => useReducer(appReducer, environment));
    const [prevEnv, dispatchEnv] = result.current;

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment: prevEnv, dispatchEnv }}>
        <SliderButton initState={params.initState} callback={params.callback} />
      </EnvironmentContext.Provider>
    );

    act(() => {
      wrapper.find('button').simulate('mouseover');
      wrapper.find('button').simulate('mouseout');
    });
  });
});
