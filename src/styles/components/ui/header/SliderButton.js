import styled from 'styled-components';

export const StyledSliderButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0;
  margin: auto;
  margin-right: 10px;

  > div {
    transition: background-color 0.3s ease;
  }

  > .slider-background {
    background-color: ${({ hover, checked }) =>
      checked ? (hover ? 'lightblue' : 'blue') : hover ? 'gray' : 'lightgray'};
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px;
    width: 30px;
    height: 15px;
    border-radius: 20px;
  }

  > div > .slider {
    background-color: ${({ hover, checked }) =>
      checked ? (hover ? 'blue' : 'white') : hover ? 'white' : 'white'};
    border-radius: 50%;
    height: 11px;
    width: 11px;
    margin-left: ${({ checked }) => (checked ? '17px' : '2px')};

    transition: margin-left 0.3s ease;
  }

  > .slider-label {
    color: ${({ theme }) => theme.primary};
    font-size: 12px;
    font-weight: 400;
    margin-left: 2px;
    margin-top: 1px;
  }
`;
