import styled from 'styled-components';

export const StyledSearchBox = styled.form`
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
    width: ${({ q }) => (q?.length === 0 ? 380 : 350)}px;

    @media only screen and (max-width: 675px) {
      width: ${({ q }) => (q?.length === 0 ? 230 : 220)}px;
    }

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
