import {Link} from 'react-router-dom';
import { AuthForm } from '../../components';
import './SignInPage.css'

const SignInPage = () => {
  const handleSignIn = async formData => {
    // Implement signin logic using the provided api service
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
