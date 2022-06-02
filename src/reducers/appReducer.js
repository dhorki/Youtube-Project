import { environmentActions } from '../constants/constants';

export const appReducer = (state, { type, payload }) => {
  switch (type) {
    case environmentActions.setTheme:
      return { ...state, theme: payload.theme };
    case environmentActions.setSidebarShow:
      return { ...state, sidebarShow: payload.sidebarShow };
    case environmentActions.setSearchQuery:
      return { ...state, q: payload.q };
    case environmentActions.setModalShow:
      return { ...state, modalShow: payload.modalShow };
    case environmentActions.setUser:
      return { ...state, user: payload.user };
    case environmentActions.setFavoritesList:
      const user = { ...state.user, favoritesList: payload.favoritesList };
      return { ...state, user: user };
    default:
      return state;
  }
};
