import PropTypes from 'prop-types';
import { environmentActions } from '../constants/constants';

export const resetSearch = (dispatch) => {
  const action = {
    type: environmentActions.setSearchQuery,
    payload: {
      q: '',
    },
  };

  dispatch(action);
};

resetSearch.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
