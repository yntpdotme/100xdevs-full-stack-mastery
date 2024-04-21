import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Link} from 'react-router-dom';
import {useSetRecoilState} from 'recoil';

import {updateProfileSchema} from '../validators/formValidators';
import {Input} from './index';
import {formSubmissionState, notificationState} from '../recoil/atoms';
import {useCurrentUser} from '../hooks';

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

  const setFormSubmission = useSetRecoilState(formSubmissionState);
  const setShowNotification = useSetRecoilState(notificationState);
  const {data: currentUser} = useCurrentUser();

  const onSubmitHandler = async data => {
    try {
      if (currentUser?.email === 'guest@email.com') {
        setShowNotification(false);
        throw new Error(`Profile update for guest users is not permitted`);
      }
      setFormSubmission(true);
      await onSubmit(data);
      reset();
    } catch (error) {
      let errorMessage = 'An unexpected error occurred. Please try again.';

      if (error.message) {
        errorMessage = error.message;
      }

      if (error?.response?.data?.message) {
        errorMessage = error.response.data.message;
      }

      setError('message', {
        type: 'manual',
        message: errorMessage,
      });
    } finally {
      setTimeout(() => setFormSubmission(false), 500);
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
              className="inline-flex items-center justify-center rounded-md px-3 font-palanquin text-sm font-normal ring-offset-background transition-colors hover:bg-accent/50 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
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
              onClick={() => setShowNotification(true)}
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
