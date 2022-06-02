import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, registerWithEmailAndPassword, signInWithGoogle } from '../../firebase';
import { MdClear } from 'react-icons/md';
import { EnvironmentContext } from '../../contexts/EnvironmentContext';
import {
  environmentActions,
  hideModalAction,
  modalTypes,
} from '../../constants/constants';
import { useForm } from '../../hooks/useForm';
import { LoadingAnimation } from '../ui/loading/LoadingAnimation';
import { StyledAuthModal } from '../../styles/auth/AuthModal';

export const RegisterModal = ({ email: sharedEmail, setEmail }) => {
  const { environment, dispatchEnv } = useContext(EnvironmentContext);
  const { theme } = environment;

  const formInitState = {
    name: '',
    email: sharedEmail,
    password: '',
  };

  const [formValues, handleInputChange] = useForm(formInitState);
  const { name, email, password } = formValues;

  const [user, loading, error] = useAuthState(auth);

  const handleClose = () => {
    dispatchEnv(hideModalAction);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    handleInputChange(e);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name) {
      alert('Please enter name');
    }
    registerWithEmailAndPassword(name, email, password);
  };

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };

  const handleSwitchToLogin = (e) => {
    e.preventDefault();
    const action = {
      type: environmentActions.setModalShow,
      payload: {
        modalShow: modalTypes.login,
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
          className="animate__animated animate__flipInY animate__faster"
        >
          <div className="modal-close-row">
            <MdClear className="modal-close" onClick={handleClose} />
          </div>
          <h3 className="modal-title">Register</h3>
          {error && <p className="alert-error">{error.message}</p>}
          <form onSubmit={handleRegister}>
            <input
              className="modal-input"
              type="text"
              placeholder="Name"
              name="name"
              autoComplete="off"
              value={name}
              onChange={handleInputChange}
            />
            <input
              className="modal-input"
              type="text"
              placeholder="Email"
              name="email"
              autoComplete="off"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              className="modal-input"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
              autoComplete="off"
            />
            <button type="submit">Register</button>
            <div className="social-networks">
              <div className="google-btn" onClick={handleGoogleLogin}>
                <div className="google-icon-wrapper">
                  <img
                    className="google-icon"
                    src={
                      'https://upload.wikimedia.org/wikipedia/commons/5/53/' +
                      'Google_%22G%22_Logo.svg'
                    }
                    alt="google button"
                  />
                </div>
                <p className="btn-text">
                  <b>Register with Google</b>
                </p>
              </div>
            </div>
            <button className="link" onClick={handleSwitchToLogin}>
              I already have an account
            </button>
          </form>
        </StyledAuthModal>
      )}
    </>
  );
};

RegisterModal.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func,
};
