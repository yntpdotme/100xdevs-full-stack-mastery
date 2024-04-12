import z from 'zod';

export const signUpSchema = z
  .object({
    name: z
      .string({required_error: 'Name is required'})
      .min(2, 'Name must be at least 3 characters')
      .max(255, 'Name must be at most 255 characters'),

    email: z.string({required_error: 'Email is required'}).email(),

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

export const depositSchema = z.object({
  amount: z
    .number({
      required_error: 'Amount is required',
      invalid_type_error: 'Amount must be a number',
    })
    .min(0.01, {message: 'Minimum amount must be 0.01'})
    .refine(
      amount => {
        const decimalCount = (amount.toString().split('.')[1] || '').length;
        return decimalCount <= 2;
      },
      {message: 'Amount must have up to two decimal digits'},
    ),
});

export const transferSchema = z.object({
  recipientId: z
    .string({
      required_error: 'recipientId is required',
      invalid_type_error: 'recipientId must be a string',
    })
    .refine(val => val.length === 24, {message: 'Invalid recipientId'}),

  amount: z
    .number({
      required_error: 'Amount is required',
      invalid_type_error: 'Amount must be a number',
    })
    .min(0.01, {message: 'Minimum amount must be 0.01'})
    .refine(
      amount => {
        const decimalCount = (amount.toString().split('.')[1] || '').length;
        return decimalCount <= 2;
      },
      {message: 'Amount must have up to two decimal digits'},
    ),
});

export const updateProfileSchema = z
  .object({
    name: z
      .string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be a string',
      })
      .trim()
      .min(3, {message: 'Must be 3 or more characters long'})
      .max(255, {message: 'Must be 255 or fewer characters long'}),
  })
  .strict();

export const updatePasswordSchema = z
  .object({
    oldPassword: z
      .string({required_error: 'Old Password is required'})
      .min(1, 'Old Password is required'),

    newPassword: z
      .string({required_error: 'New Password is required'})
      .min(
        6,
        'Password must have at least 6 characters, one uppercase letter, one lowercase letter, one digit, and one special character.',
      )
      .refine(password => {
        // At least one uppercase letter, one lowercase letter, one digit, and one special character
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;
        return passwordRegex.test(password);
      }, 'Password must have at least 6 characters, one uppercase letter, one lowercase letter, one digit, and one special character.'),

    confirmNewPassword: z.string({
      required_error: 'Please Confirm New Password',
    }),
  })
  .strict()
  .refine(
    data =>
      data.newPassword && data.confirmNewPassword
        ? data.newPassword === data.confirmNewPassword
        : true,
    {
      message: 'Passwords do not match',
      path: ['confirmNewPassword'],
    },
  );
