import PropTypes from 'prop-types';
import { resetSearchQueryAction } from '../constants/constants';

export const resetSearch = (dispatch) => {
  dispatch(resetSearchQueryAction);
};

resetSearch.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
