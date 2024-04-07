import {Link, useNavigate} from 'react-router-dom';

import {AuthForm} from '../components';

const SignInPage = () => {
  const navigate = useNavigate();

  const handleSignUp = async () => {
    navigate('/dashboard');
  };

  return (
    <section className="max-container relative flex h-screen flex-col items-center justify-center">
      <p className="mb-10 bg-gradient-to-r from-gray-400 to-gray-950 bg-clip-text font-palanquin text-2xl font-extrabold text-transparent dark:from-gray-600 dark:to-white">
        <Link to="/">PaymentX</Link>
      </p>

      <div className="flex w-full max-w-sm flex-col items-center space-y-4 rounded-xl border-transparent bg-white px-4 py-8 dark:bg-transparent md:w-8/12 md:border md:px-8 dark:md:shadow-[0_0_1200px_0] dark:md:shadow-primary/30 lg:w-7/12 lg:bg-background lg:px-6 dark:lg:border-dark-800 xl:w-6/12 2xl:w-5/12">
        <div>
          <h5 className="mb-4 font-palanquin text-xl font-medium">
            Sign in to your account
          </h5>
        </div>

        <AuthForm onSubmit={handleSignUp} buttonText="Sign In" />

        <div className="flex justify-center text-xs">
          <p className="flex space-x-2 font-montserrat text-sm">
            <span>Do not have an account yet?</span>
            <Link
              to="/signup"
              className="text-primary-700 dark:text-primary-400"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
