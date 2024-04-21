import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useSetRecoilState} from 'recoil';

import {updatePasswordSchema} from '../validators/formValidators';
import {Input, InputPassword} from './index';
import {formSubmissionState, notificationState} from '../recoil/atoms';
import {useCurrentUser} from '../hooks';

const UpdatePasswordForm = ({onSubmit}) => {
  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
    setError,
    reset,
  } = useForm({
    resolver: zodResolver(updatePasswordSchema),
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
              htmlFor="oldPassword"
            >
              Old Password
            </label>
            <InputPassword
              props={register('oldPassword')}
              type="password"
              placeholder=""
              error={errors.oldPassword?.message}
              id="oldPassword"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label
              className="w-full text-sm font-medium text-gray-400"
              htmlFor="newPassword"
            >
              New Password
            </label>
            <InputPassword
              props={register('newPassword')}
              type="password"
              placeholder=""
              error={errors.newPassword?.message}
              id="newPassword"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label
              className="w-full text-sm font-medium text-gray-400"
              htmlFor="confirmNewPassword"
            >
              Repeat New Password
            </label>
            <Input
              props={register('confirmNewPassword')}
              type="password"
              placeholder=""
              error={errors.confirmNewPassword?.message}
              id="confirmNewPassword"
            />
          </div>

          <div>
            <button
              className="inline-flex items-center justify-center rounded-md bg-primary bg-gradient-to-r px-6 py-3 text-sm font-medium text-white shadow-2xl transition-colors hover:bg-primary/90 focus-visible:outline-none disabled:pointer-events-none max-sm:w-full"
              disabled={!isValid}
              onClick={() => setShowNotification(true)}
            >
              <span className="font-montserrat">Update Password</span>
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

export default UpdatePasswordForm;
