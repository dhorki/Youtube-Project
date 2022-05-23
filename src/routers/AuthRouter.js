import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginModal } from '../components/auth/LoginModal';
import { RegisterModal } from '../components/auth/RegisterModal';

export const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Switch>
          <Route path="/auth/login" component={LoginModal} />
          <Route path="/auth/register" component={RegisterModal} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </div>
  );
};
