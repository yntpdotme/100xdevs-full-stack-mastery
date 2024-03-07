import {Link, useNavigate} from 'react-router-dom';

import {AuthForm} from '../../components';
import signinService from '../../services/signinService';
import {setAccessToken} from '../../services/tokenStroage';

import './SignInPage.css';

const SignInPage = () => {
  const navigate = useNavigate();

  const handleSignIn = async formData => {
    const response = await signinService.signIn(formData);
    setAccessToken(response?.data?.access_token);

    navigate('/todos');
  };

  return (
    <div>
      <h1>Log In</h1>
      <AuthForm onSubmit={handleSignIn} buttonText="Log in" />
      <p className="footer">
        No Account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignInPage;
