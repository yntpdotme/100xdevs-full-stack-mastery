import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import './AuthForm.css';

import z from 'zod';

const signUpSchema = z
  .object({
    name: z.string({required_error: 'Name is required'}).min(3).max(255),
    email: z.string({required_error: 'Email is required'}).email(),
    password: z
      .string({required_error: 'Password is required'})
      .min(
        6,
        'Password must have at least 6 characters, one uppercase letter, one lowercase letter, one digit, and one special character.'
      )
      .refine(password => {
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;
        return passwordRegex.test(password);
      }, 'Password must have at least 6 characters, one uppercase letter, one lowercase letter, one digit, and one special character.'),

    confirmPassword: z.string({
      required_error: 'Confirm Password is required',
    }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

const signInSchema = z.object({
  email: z
    .string({required_error: 'Email is required'})
    .email('Please enter a valid email address'),
  password: z
    .string({required_error: 'Password is required'})
    .min(1, 'Password is required'),
});

const AuthForm = ({onSubmit, buttonText, isSignUp}) => {
  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    resolver: zodResolver(isSignUp ? signUpSchema : signInSchema),
    mode: 'onChange',
  });

  const onSubmitHandler = data => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      {isSignUp && (
        <>
          <input {...register('name')} type="text" placeholder="Name" />
          {errors.name?.message && (
            <p className="error">{errors.name.message}</p>
          )}
        </>
      )}
      <input {...register('email')} type="email" placeholder="Email" />
      {errors.email?.message && <p className="error">{errors.email.message}</p>}
      <input {...register('password')} type="password" placeholder="Password" />
      {errors.password?.message && (
        <p className="error">{errors.password.message}</p>
      )}
      {isSignUp && (
        <>
          <input
            {...register('confirmPassword')}
            type="password"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword?.message && (
            <p className="error">{errors.confirmPassword.message}</p>
          )}
        </>
      )}
      {errors.message && <p className="error">{errors.message}</p>}
      <button type="submit" disabled={!isValid}>
        {buttonText}
      </button>
    </form>
  );
};

export default AuthForm;
