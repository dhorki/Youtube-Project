import React, { useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import { MdClear } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { StyledSearchBox } from '../../../styles/components/ui/header/SearchInput';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext';
import { environmentActions } from '../../../constants/constants';
import { resetSearch } from '../../../helpers/resetSearch';

export const SearchInput = () => {
  const { environment, dispatchEnv } = useContext(EnvironmentContext);
  const { theme, q } = environment;

  const history = useHistory();

  const handleSearchChange = (e) => {
    const { name, value } = e.target;

    const action = {
      type: environmentActions.setSearchQuery,
      payload: {
        [name]: value,
      },
    };

    dispatchEnv(action);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(q?.length > 0 ? '/?q=' + q : '/');
  };

  return (
    <StyledSearchBox theme={theme} q={q}>
      <input
        type="text"
        autoComplete="off"
        placeholder="Search"
        value={q}
        onChange={handleSearchChange}
        name="q"
        theme={theme}
      />
      <button
        className="clear-button"
        type="button"
        onClick={() => resetSearch(dispatchEnv)}
      >
        <MdClear />
      </button>

      <button className="search-button" type="submit" onClick={handleSearch}>
        <BsSearch />
      </button>
    </StyledSearchBox>
  );
};
