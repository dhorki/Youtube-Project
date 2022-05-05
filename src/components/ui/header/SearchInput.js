import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { useForm } from '../../../hooks/useForm';
import { MdClear } from 'react-icons/md';
import { useTheme } from '../../../hooks/useTheme';
import { useHistory } from 'react-router-dom';
import { StyledSearchBox } from '../../../styles/components/ui/header/SearchInput';

export const SearchInput = () => {
  const { getTheme } = useTheme();
  const theme = getTheme();
  // TODO: initialize the form with the initial values
  const [{ q }, handleInputChange] = useForm({ q: '' });

  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    history.push('../../../https://www.google.com/search?q=' + q);
    console.log('Search', q);
  };

  const handleClear = (e) => {
    e.preventDefault();
    handleInputChange({ target: { name: 'q', value: '' } });
  };

  return (
    <StyledSearchBox theme={theme} q={q}>
      <input
        type="text"
        autoComplete="off"
        placeholder="Search"
        value={q}
        onChange={handleInputChange}
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
