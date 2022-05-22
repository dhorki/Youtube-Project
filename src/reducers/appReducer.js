import { environmentActions } from '../constants/constants';

export const appReducer = (state, { type, payload }) => {
  switch (type) {
    case environmentActions.setTheme:
      return { ...state, theme: payload.theme };
    case environmentActions.setSidebarShow:
      return { ...state, sidebarShow: payload.sidebarShow };
    case environmentActions.setSearchQuery:
      return { ...state, q: payload.q };
    default:
      return state;
  }
};
