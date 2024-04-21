import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useEffect} from 'react';
import {useSetRecoilState} from 'recoil';

import {closeIcon} from '../assets';
import {transferSchema} from '../validators/formValidators';
import {Input, Button} from './index';
import {formSubmissionState, notificationState} from '../recoil/atoms';

const DialogBox = ({user, label, onSubmit, onClose}) => {
  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
    setFocus,
    setError,
    reset,
  } = useForm({
    resolver: zodResolver(transferSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    setFocus('amount');
  }, [setFocus]);

  const setFormSubmission = useSetRecoilState(formSubmissionState);
  const setShowNotification = useSetRecoilState(notificationState);

  const onSubmitHandler = async data => {
    try {
      setFormSubmission(true);
      await onSubmit(data);
      reset();
      onClose();
    } catch (error) {
      console.log(error);
      let errorMessage = 'An unexpected error occurred. Please try again.';

      if (error.message) {
        errorMessage = error.message;
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
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm"></div>
      <div
        className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] items-center gap-4 rounded-lg border bg-background p-6 py-10 shadow-lg duration-200 dark:border-dark-800 dark:shadow-2xl dark:shadow-primary/30 max-sm:w-[calc(100vw-2rem)]"
        tabIndex="-1"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col space-y-6">
          <div className="flex items-center">
            <h2 className="flex w-full font-palanquin text-2xl font-medium text-current">
              <span className="max-w-[90%] truncate">{label}</span>
            </h2>
          </div>

          <div className="relative">
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-1">
                  <label
                    className="w-full text-sm font-medium text-gray-400"
                    htmlFor="To"
                  >
                    To
                  </label>
                  <Input
                    type="text"
                    placeholder="Recipient"
                    id="To"
                    props={{value: user.name}}
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label
                    className="w-full text-sm font-medium text-gray-400"
                    htmlFor="amount"
                  >
                    Amount
                  </label>
                  <Input
                    props={register('amount', {valueAsNumber: true})}
                    type="text"
                    placeholder="Enter amount"
                    error={errors.amount?.message}
                    id="amount"
                  />
                </div>

                <input
                  type="hidden"
                  {...register('recipientId')}
                  value={user._id}
                />

                <div className="flex justify-end pt-1">
                  <Button
                    label="Transfer"
                    roundedCorners="md"
                    isDisabled={!isValid}
                    onClick={() => setShowNotification(true)}
                  />
                </div>

                {errors.message && (
                  <p className="mt-4 text-center text-sm font-medium leading-tight text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </form>
          </div>

          <button
            type="button"
            onClick={e => {
              e.stopPropagation();
              onClose();
            }}
            className="dark:border-dark-700 dark:active:bg-dark-600 absolute right-6 top-4 flex h-8 w-8 items-center justify-center rounded-full border-gray-100 bg-transparent outline-none ring-primary/70 transition-all hover:border focus:ring-2 active:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-primary/70"
          >
            <img
              src={closeIcon}
              alt=""
              className="h-6 dark:invert dark:filter"
            />
            <span className="sr-only">Close</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default DialogBox;
