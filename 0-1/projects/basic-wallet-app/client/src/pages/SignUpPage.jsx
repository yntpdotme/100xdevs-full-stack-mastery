import {Link, useNavigate} from 'react-router-dom';

import {AuthForm} from '../components';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignUp = async () => {
    navigate('/dashboard');
  };

  return (
    <main className="max-container flex h-screen flex-col items-center justify-center">
      <p className="mb-10 bg-gradient-to-r from-gray-600 to-white bg-clip-text font-palanquin text-xl font-extrabold text-transparent md:text-2xl">
        PaymentX
      </p>

      <div className="flex w-full max-w-sm flex-col items-center space-y-4 rounded-xl border-transparent bg-transparent px-2 py-1 max-sm:px-6 md:w-8/12 md:border md:px-8 md:py-6 lg:w-7/12 lg:border-[#1E2931] lg:bg-background lg:px-6 lg:shadow-[0_0_1200px_0] lg:shadow-primary/30 xl:w-6/12 2xl:w-5/12">
        <div>
          <h5 className="mb-2 font-palanquin text-xl font-medium">
            Create an account
          </h5>
        </div>

        <AuthForm onSubmit={handleSignUp} buttonText="Get started" isSignUp />

        <div className="flex justify-center text-xs">
          <p className="flex space-x-2 font-montserrat text-sm">
            <span>Already have an account?</span>
            <Link to="/signin" className="text-primary-400">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
