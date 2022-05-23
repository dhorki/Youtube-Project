import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../../firebase';
import { MdClear } from 'react-icons/md';
import { StyledLoginModal } from '../../styles/auth/LoginModal';
import { EnvironmentContext } from '../../contexts/EnvironmentContext';
import { environmentActions, hideModalAction } from '../../constants/constants';
import { useForm } from '../../hooks/useForm';
import { LoadingAnimation } from '../ui/loading/LoadingAnimation';

export const LoginModal = ({ email: sharedEmail, setEmail }) => {
  const { environment, dispatchEnv } = useContext(EnvironmentContext);
  const { theme } = environment;

  const formInitState = {
    email: sharedEmail,
    password: '',
  };

  const [formValues, handleInputChange] = useForm(formInitState);
  const { email, password } = formValues;

  const history = useHistory();
  const [user, loading, error] = useAuthState(auth);

  const handleClose = () => {
    dispatchEnv(hideModalAction);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    handleInputChange(e);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    logInWithEmailAndPassword(email, password);
  };

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };

  const handleSwitchToCreateAccount = (e) => {
    e.preventDefault();
    const action = {
      type: environmentActions.setModalShow,
      payload: {
        modalShow: 'register',
      },
    };

    dispatchEnv(action);
  };

  useEffect(() => {
    if (user) {
      dispatchEnv(hideModalAction);
      history.push('/');
    }
  }, [user, history, dispatchEnv]);

  console.log(error);

  return (
    <>
      {loading ? (
        <LoadingAnimation theme={theme} />
      ) : (
        <StyledLoginModal
          theme={theme}
          className="animate__animated animate__flipInX animate__faster"
        >
          <div className="modal-close-row">
            <MdClear className="modal-close" onClick={handleClose} />
          </div>
          <h3 className="modal-title">Login</h3>
          {error && <p className="alert-error">{error.message}</p>}
          <form onSubmit={handleLogin}>
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
            <button type="submit">Login</button>
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
                  <b>Sign in with Google</b>
                </p>
              </div>
            </div>
            <button className="link" onClick={handleSwitchToCreateAccount}>
              Create new account
            </button>
          </form>
        </StyledLoginModal>
      )}
    </>
  );
};
