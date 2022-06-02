import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, sendPasswordReset } from '../../firebase';
import { MdClear } from 'react-icons/md';
import { StyledAuthModal } from '../../styles/auth/AuthModal';
import { EnvironmentContext } from '../../contexts/EnvironmentContext';
import {
  environmentActions,
  hideModalAction,
  modalTypes,
} from '../../constants/constants';
import { useForm } from '../../hooks/useForm';
import { LoadingAnimation } from '../ui/loading/LoadingAnimation';

export const ResetPasswordModal = ({ email: sharedEmail, setEmail }) => {
  const { environment, dispatchEnv } = useContext(EnvironmentContext);
  const { theme } = environment;

  const formInitState = {
    email: sharedEmail,
    password: '',
  };

  const [formValues, handleInputChange] = useForm(formInitState);
  const { email } = formValues;

  const [user, loading, error] = useAuthState(auth);

  const handleClose = () => {
    dispatchEnv(hideModalAction);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    handleInputChange(e);
  };

  const handleReset = (e) => {
    e.preventDefault();
    sendPasswordReset(email);
  };

  const handleSwitchToCreateAccount = (e) => {
    e.preventDefault();
    const action = {
      type: environmentActions.setModalShow,
      payload: {
        modalShow: modalTypes.register,
      },
    };

    dispatchEnv(action);
  };

  useEffect(() => {
    if (user) {
      dispatchEnv(hideModalAction);
    }
  }, [user, dispatchEnv]);

  return (
    <>
      {loading ? (
        <LoadingAnimation theme={theme} />
      ) : (
        <StyledAuthModal
          theme={theme}
          className="animate__animated animate__flipInX animate__faster"
        >
          <div className="modal-close-row">
            <MdClear className="modal-close" onClick={handleClose} />
          </div>
          <h3 className="modal-title">Reset Password</h3>
          {error && <p className="alert-error">{error.message}</p>}
          <form onSubmit={handleReset}>
            <input
              className="modal-input"
              type="text"
              placeholder="Email"
              name="email"
              autoComplete="off"
              value={email}
              onChange={handleEmailChange}
            />
            <button type="submit">Reset Password</button>
            <hr />
            <button className="link" onClick={handleSwitchToCreateAccount}>
              Create new account
            </button>
          </form>
        </StyledAuthModal>
      )}
    </>
  );
};

ResetPasswordModal.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func,
};
