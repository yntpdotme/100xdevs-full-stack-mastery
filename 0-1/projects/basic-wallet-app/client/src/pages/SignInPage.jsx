import {Link, useNavigate} from 'react-router-dom';

import {AuthForm} from '../components';

const SignInPage = () => {
  const navigate = useNavigate();

  const handleSignUp = async () => {
    navigate('/dashboard');
  };

  return (
    <section className="max-container flex h-screen flex-col items-center justify-center">
      <p className="mb-10 bg-gradient-to-r from-gray-600 to-white bg-clip-text font-palanquin text-2xl font-extrabold text-transparent">
        PaymentX
      </p>

      <div className="flex w-full max-w-sm flex-col items-center space-y-4 rounded-xl border-transparent bg-transparent px-4 py-6 md:w-8/12 md:border md:px-8 md:shadow-[0_0_1200px_0] md:shadow-primary/30 lg:w-7/12 lg:border-dark-800 lg:bg-background lg:px-6 xl:w-6/12 2xl:w-5/12">
        <div>
          <h5 className="mb-2 font-palanquin text-xl font-medium">
            Sign in to your account
          </h5>
        </div>

        <AuthForm onSubmit={handleSignUp} buttonText="Get started" />

        <div className="flex justify-center text-xs">
          <p className="flex space-x-2 font-montserrat text-sm">
            <span>Do not have an account yet?</span>
            <Link to="/signup" className="text-primary-400">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
