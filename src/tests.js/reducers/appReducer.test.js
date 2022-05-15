import { renderHook, act } from '@testing-library/react-hooks';
import { useReducer } from 'react';
import { environmentActions, styles } from '../../constants/constants';
import { appReducer } from '../../reducers/appReducer';

describe('appReducer', () => {
  it('should return default state', () => {
    const init = {
      theme: styles.colors.light,
      sidebarShow: false,
      q: '',
    };

    const { result } = renderHook(() => useReducer(appReducer, init));
    const [environment] = result.current;

    expect(environment).toEqual(init);
  });

  it('should return changed theme', () => {
    const init = {
      theme: styles.colors.light,
      sidebarShow: false,
      q: '',
    };

    const { result } = renderHook(() => useReducer(appReducer, init));
    const [, dispatchEnv] = result.current;

    const action = {
      type: environmentActions.setTheme,
      payload: {
        theme: styles.colors.dark,
      },
    };

    act(() => {
      dispatchEnv(action);
    });

    const [environmentNew] = result.current;
    const { theme } = environmentNew;

    expect(theme).toEqual(action.payload.theme);
  });

  it('should return changed sidebar show status', () => {
    const init = {
      theme: styles.colors.light,
      sidebarShow: false,
      q: '',
    };

    const { result } = renderHook(() => useReducer(appReducer, init));
    const [, dispatchEnv] = result.current;

    const action = {
      type: environmentActions.setSidebarShow,
      payload: {
        sidebarShow: true,
      },
    };

    act(() => {
      dispatchEnv(action);
    });

    const [environmentNew] = result.current;
    const { sidebarShow } = environmentNew;

    expect(sidebarShow).toBe(action.payload.sidebarShow);
  });

  it('should return changed search query', () => {
    const init = {
      theme: styles.colors.light,
      sidebarShow: false,
      q: '',
    };

    const { result } = renderHook(() => useReducer(appReducer, init));
    const [, dispatchEnv] = result.current;

    const action = {
      type: environmentActions.setSearchQuery,
      payload: {
        q: 'newValue',
      },
    };

    act(() => {
      dispatchEnv(action);
    });

    const [environmentNew] = result.current;
    const { q } = environmentNew;

    expect(q).toBe(action.payload.q);
  });

  it('should return the unchanged state when using unknown action type', () => {
    const init = {
      theme: styles.colors.light,
      sidebarShow: false,
      q: '',
    };

    const { result } = renderHook(() => useReducer(appReducer, init));
    const [, dispatchEnv] = result.current;

    const action = {
      type: 'UNKNOWN_ACTION',
      payload: {
        random: 'random',
      },
    };

    act(() => {
      dispatchEnv(action);
    });
    const [environmentNew] = result.current;

    expect(environmentNew).toEqual(init);
  });
});
