import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useTheme } from '../../../hooks/useTheme';

const StyledSliderButton = styled.button`
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

export const SliderButton = ({ label, initState, callback }) => {
  const { getTheme } = useTheme();
  const theme = getTheme();

  const [hover, setHover] = useState(false);
  const [checked, setChecked] = useState(initState);

  const handleToggle = () => {
    setChecked(!checked);
    if (callback) {
      callback(!checked);
    }
  };

  return (
    <StyledSliderButton
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
      onClick={handleToggle}
      hover={hover}
      checked={checked}
      theme={theme}
    >
      <div className="slider-background">
        <div className="slider" />
      </div>
      {label && <div className="slider-label">{label}</div>}
    </StyledSliderButton>
  );
};

SliderButton.propTypes = {
  label: PropTypes.string,
  initState: PropTypes.bool.isRequired,
  callback: PropTypes.func,
};
