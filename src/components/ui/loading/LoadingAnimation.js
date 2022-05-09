import React from 'react';
import { StyledLoadingAnimation } from '../../../styles/components/ui/loading/LoadingAnimation';

const loadingAnimation = {
  src: 'https://i.pinimg.com/originals/d4/2b/b2/d42bb2f00e1042c990b25f90ada9b0ab.gif',
};

export const LoadingAnimation = () => {
  return (
    <StyledLoadingAnimation>
      <img src={loadingAnimation.src} alt="loading" />
    </StyledLoadingAnimation>
  );
};
