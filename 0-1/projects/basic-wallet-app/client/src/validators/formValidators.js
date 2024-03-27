import z from 'zod';

export const signUpSchema = z
  .object({
    name: z
      .string({required_error: 'Name is required'})
      .min(2, 'Name must be at least 3 characters')
			.max(255, 'Name must be at most 255 characters'),
		
		email: z.string({ required_error: 'Email is required' }).email(),
		
    password: z
      .string({required_error: 'Password is required'})
      .min(
        6,
        'Password must have at least 6 characters, one uppercase letter, one lowercase letter, one digit, and one special character.',
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

export const signInSchema = z.object({
  email: z
    .string({required_error: 'Email is required'})
		.email('Please enter a valid email address'),
	
  password: z
    .string({required_error: 'Password is required'})
    .min(1, 'Password is required'),
});
