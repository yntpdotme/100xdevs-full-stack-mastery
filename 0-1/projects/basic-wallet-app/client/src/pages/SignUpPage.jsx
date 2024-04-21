import {Link, useNavigate} from 'react-router-dom';

import {AuthForm, GuestLogin} from '../components';
import {AuthService, LocalStorage} from '../api/services';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignUp = async formData => {
    const response = await AuthService.signUp(formData);
    const {accessToken, refreshToken} = response?.data?.data || {};

    LocalStorage.set('accessToken', accessToken);
    LocalStorage.set('refreshToken', refreshToken);

    navigate('/dashboard');
  };

  return (
    <section className="max-container relative flex h-screen flex-col items-center justify-center">
      <p className="mb-10 bg-gradient-to-r from-gray-400 to-gray-950 bg-clip-text font-palanquin text-2xl font-extrabold text-transparent dark:from-gray-600 dark:to-white">
        <Link to="/">PaymentX</Link>
      </p>

      <div className="flex w-full max-w-[30rem] flex-col items-center space-y-4 rounded-xl border-transparent bg-white px-4 py-8 pb-4 dark:bg-transparent md:border md:px-8 dark:md:shadow-[0_0_1200px_0] dark:md:shadow-primary/30 lg:bg-background lg:px-6 dark:lg:border-dark-800">
        <div>
          <h5 className="mb-2 font-palanquin text-xl font-medium">
            Create an account
          </h5>
        </div>

        <AuthForm onSubmit={handleSignUp} buttonText="Get started" isSignUp />

        <div className="flex justify-center text-xs">
          <p className="flex space-x-2 font-montserrat text-sm">
            <span>Already have an account?</span>
            <Link
              to="/signin"
              className="text-primary-700 dark:text-primary-400"
            >
              Sign In
            </Link>
          </p>
        </div>

        <GuestLogin />
      </div>
    </section>
  );
};

export default SignUpPage;
