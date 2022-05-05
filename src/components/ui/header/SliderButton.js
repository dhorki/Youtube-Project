import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../../hooks/useTheme';
import { StyledSliderButton } from '../../../styles/components/ui/header/SliderButton';

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
