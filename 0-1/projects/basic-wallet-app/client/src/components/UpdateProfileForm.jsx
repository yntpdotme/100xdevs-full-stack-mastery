import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Link} from 'react-router-dom';

import {updateProfileSchema} from '../validators/formValidators';
import {Input} from './index';

const UpdateProfileForm = ({onSubmit}) => {
  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
    setError,
    reset,
  } = useForm({
    resolver: zodResolver(updateProfileSchema),
    mode: 'onChange',
  });

  const onSubmitHandler = async data => {
    try {
      await onSubmit(data);
      reset();
    } catch (error) {
      let errorMessage = 'An unexpected error occurred. Please try again.';

      if (error?.response?.data) {
        errorMessage = error.response.data;
      }

      setError('message', {
        type: 'manual',
        message: errorMessage,
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)} className="mt-6">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <label
              className="w-full text-sm font-medium text-gray-400"
              htmlFor="name"
            >
              Your Name
            </label>
            <Input
              props={register('name')}
              type="text"
              placeholder=""
              error={errors.name?.message}
              id="name"
            />
          </div>

          <div>
            <button
              type="button"
              tabIndex="-1"
              className="inline-flex items-center justify-center rounded-md px-3 text-sm font-palanquin font-normal ring-offset-background transition-colors hover:bg-accent/50 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              <Link
                className="flex h-full w-full items-center transition-transform duration-500 ease-out"
                to="/profile/password"
              >
                <span className="flex w-full flex-1 items-center justify-center">
                  Update Password
                </span>
              </Link>
            </button>
          </div>

          <div>
            <button
              className="inline-flex items-center justify-center rounded-md bg-primary bg-gradient-to-r px-6 py-3 text-sm font-medium text-white shadow-2xl transition-colors hover:bg-primary/90 focus-visible:outline-none disabled:pointer-events-none max-sm:w-full"
              disabled={!isValid}
            >
              <span className="font-montserrat">Update Profile</span>
            </button>
          </div>

          {errors.message && (
            <p className="mt-4 text-center text-sm font-medium leading-tight text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>
      </form>
    </>
  );
};

export default UpdateProfileForm;
