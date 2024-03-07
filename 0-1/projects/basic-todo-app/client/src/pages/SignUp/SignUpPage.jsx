import {Link, useNavigate} from 'react-router-dom';

import {AuthForm} from '../../components';
import signupService from '../../services/signupService';

import './SignUpPage.css';
import {setAccessToken} from '../../services/tokenStroage';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignUp = async formData => {
    const response = await signupService.signUp(formData);
    setAccessToken(response?.data?.access_token);

    navigate('/todos');
  };

  return (
    <div>
      <h1>Create Account</h1>
      <AuthForm
        onSubmit={handleSignUp}
        buttonText="Create my account"
        isSignUp
      />
      <p className="footer">
        Have an account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUpPage;
