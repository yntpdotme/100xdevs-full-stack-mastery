import {Link} from 'react-router-dom';
import {AuthForm} from '../../components';
import api from '../../services/api';
import './SignUpPage.css';

const SignUpPage = () => {
  const handleSignUp = async formData => {
    try {
      const response = await api.post('/signup', formData);
      console.log('User registered successfully:', response.data);
      // Redirect to login or perform any other action after signup
    } catch (error) {
      console.error('Error signing up:', error.response.data);
      // Handle signup error
    }
  };

  return (
    <div>
      <h1>Create Account</h1>
      <AuthForm onSubmit={handleSignUp} buttonText="Create account" isSignUp />
      <p className="footer">
        Have an account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUpPage;
