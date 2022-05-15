import { environmentActions } from '../../constants/constants';
import { resetSearch } from '../../helpers/resetSearch';

describe('resetSearch::resetSearch', () => {
  it('should call dispatch with action setSearchQuery and q="" ', () => {
    const dispatch = jest.fn();

    const expected = {
      type: environmentActions.setSearchQuery,
      payload: {
        q: '',
      },
    };

    resetSearch(dispatch);
    expect(dispatch).toHaveBeenCalledWith(expected);
  });
});
