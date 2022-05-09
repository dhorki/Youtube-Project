import React, { useContext, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { MdClear } from 'react-icons/md';
import { useTheme } from '../../../hooks/useTheme';
import { useHistory } from 'react-router-dom';
import { StyledSearchBox } from '../../../styles/components/ui/header/SearchInput';
import { useLocation } from 'react-router-dom';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext';

export const SearchInput = () => {
  const location = useLocation();
  const queryString = require('query-string');
  const { q: query = '' } = queryString.parse(location.search);

  const { q, handleSearchChange } = useContext(EnvironmentContext);

  const { getTheme } = useTheme();
  const theme = getTheme();

  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(q?.length > 0 ? '/?q=' + q : '/');
  };

  useEffect(() => {
    handleSearchChange({ target: { name: 'q', value: query } });
  }, [query, handleSearchChange]);

  const handleClear = (e) => {
    e.preventDefault();
    handleSearchChange({ target: { name: 'q', value: '' } });
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
      <button className="clear-button" type="button" onClick={handleClear}>
        <MdClear />
      </button>

      <button className="search-button" type="submit" onClick={handleSearch}>
        <BsSearch />
      </button>
    </StyledSearchBox>
  );
};
