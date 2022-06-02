import PropTypes from 'prop-types';
import { environmentActions } from '../constants/constants';
import { saveFavorites } from '../firebase';

export const updateFavoritesList = (user, videoId, dispatch) => {
  const modifiedFavorites = user.favoritesList.includes(videoId)
    ? user.favoritesList.filter((f) => f !== videoId)
    : [...user.favoritesList, videoId];

  saveFavorites(user.uid, modifiedFavorites);

  const action = {
    type: environmentActions.setFavoritesList,
    payload: {
      favoritesList: modifiedFavorites,
    },
  };

  dispatch(action);
};

updateFavoritesList.propTypes = {
  user: PropTypes.object.isRequired,
  videoId: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};
