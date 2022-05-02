import React from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { useForm } from '../../../hooks/useForm';
import { MdClear } from 'react-icons/md';
import { useTheme } from '../../../hooks/useTheme';

const StyledSearchBox = styled.form`
  background-color: ${({ theme }) => theme.inputBackground};
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.inputBorder};
  display: flex;
  flex-direction: row;
  margin: auto;
  height: 30px;

  > input {
    color: ${({ theme }) => theme.primary};
    font-family: 'Roboto', 'Arial', sans-serif;
    border: none;
    border-radius: 2px;
    background-color: transparent;
    padding: 0.5rem;
    padding-right: 0.2rem;
    width: ${({ q }) => (q.length === 0 ? 380 : 350)}px;

    &:focus {
      outline: none;
    }
  }

  > .clear-button {
    ${({ q }) => q.length === 0 && 'display: none;'}
    width: 30px;
    color: ${({ theme }) => theme.primary};
    background-color: transparent;
    border: none;
    cursor: pointer;
    height: 100%;
    margin-top: auto;
    margin-bottom: auto;
  }

  > .search-button {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.searchButtonBackground};
    border: none;
    border-left: 1px solid ${({ theme }) => theme.inputBorder};
    cursor: pointer;
    justify-content: center;
    padding: 0;
    margin: auto;
    width: 50px;
    height: 100%;
  }
`;

export const SearchInput = () => {
  const { getTheme } = useTheme();
  const theme = getTheme();
  // TODO: initialize the form with the initial values
  const [{ q }, handleInputChange] = useForm({ q: '' });

  const handleSearch = (e) => {
    e.preventDefault();
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
