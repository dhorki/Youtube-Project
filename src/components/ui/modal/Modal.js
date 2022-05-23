import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { modalTypes } from '../../../constants/constants';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext';
import { StyledModal } from '../../../styles/components/ui/modal/Modal';
import { LoginModal } from '../../auth/LoginModal';
import { RegisterModal } from '../../auth/RegisterModal';

export const Modal = () => {
  const { environment } = useContext(EnvironmentContext);
  const { theme, modalShow } = environment;

  const [email, setEmail] = useState('');

  return ReactDOM.createPortal(
    <StyledModal
      theme={theme}
      className="animate__animated animate__fadeIn animate__faster"
    >
      {modalTypes.login === modalShow && <LoginModal email={email} setEmail={setEmail} />}
      {modalTypes.register === modalShow && (
        <RegisterModal email={email} setEmail={setEmail} />
      )}
    </StyledModal>,
    document.getElementById('modal')
  );
};
