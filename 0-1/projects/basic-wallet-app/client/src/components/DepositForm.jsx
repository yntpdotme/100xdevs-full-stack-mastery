import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {depositSchema} from '../validators/formValidators';
import useCurrentUser from '../hooks/useCurrentUser';
import {Input} from './index';

const DepositForm = ({onSubmit}) => {
  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
    setError,
    reset,
  } = useForm({
    resolver: zodResolver(depositSchema),
    mode: 'onChange',
  });

  const onSubmitHandler = async data => {
    try {
      await onSubmit(data);
      reset();
    } catch (error) {
      let errorMessage = 'An unexpected error occurred. Please try again.';

      if (error?.response?.data?.message) {
        errorMessage = error.response.data.message;
      }

      setError('message', {
        type: 'manual',
        message: errorMessage,
      });
    }
  };

  const {data:currentUser, isError} = useCurrentUser();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)} className="mt-6">
        <div className="flex flex-col space-y-4">
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
              placeholder=""
              error={errors.amount?.message}
              id="amount"
            />
          </div>

          <div>
            <button
              className="inline-flex items-center justify-center rounded-md bg-primary bg-gradient-to-r px-6 py-3 text-sm font-medium text-white shadow-2xl transition-colors hover:bg-primary/90 focus-visible:outline-none disabled:pointer-events-none max-sm:w-full"
              disabled={!isValid}
            >
              <span className="font-montserrat">Add Money</span>
            </button>
          </div>

          {errors.message && (
            <p className="mt-4 text-center text-sm font-medium leading-tight text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>
      </form>

      <div className="mt-8 flex flex-auto items-center justify-center space-x-5 font-palanquin sm:justify-end">
        <div className="flex items-center space-x-3">
          <span className="mx-auto flex size-8 shrink-0 overflow-hidden rounded-full group-focus:ring-2">
            {isError ? (
              <span className="flex h-full w-full items-center justify-center rounded-full bg-red-400 font-semibold uppercase text-primary-foreground">
                ?
              </span>
            ) : (
              <img src={currentUser?.avatar} alt="avatar" />
            )}
          </span>
          <div className="block truncate text-sm">
            {isError ? (
              <span className="text-red-400">Email couldn&apos;t load</span>
            ) : (
              currentUser?.email
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2 rounded bg-sky-50 px-2 py-1 text-xs font-medium text-sky-800 dark:bg-sky-500/10 dark:text-sky-600">
          You
        </div>
      </div>
    </>
  );
};

export default DepositForm;
