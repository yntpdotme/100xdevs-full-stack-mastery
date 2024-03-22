import z from 'zod';

const userRegisterValidator = user => {
  const schema = z
    .object({
      name: z
        .string({
          required_error: 'Name is required',
          invalid_type_error: 'Name must be a string',
        })
        .trim()
        .min(3, {message: 'Must be 3 or more characters long'})
        .max(255, {message: 'Must be 255 or fewer characters long'}),

      email: z
        .string({
          required_error: 'Email is required',
        })
        .email('Please enter a valid email address'),

      password: z
        .string({required_error: 'Password is required'})
        .min(
          6,
          'Password must have at least 6 characters, one uppercase letter, one lowercase letter, one digit, and one special character.'
        )
        .refine(password => {
          // At least one uppercase letter, one lowercase letter, one digit, and one special character
          const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;
          return passwordRegex.test(password);
        }, 'Password must have at least 6 characters, one uppercase letter, one lowercase letter, one digit, and one special character.'),

      passwordConfirmation: z.string({
        required_error: 'Password Confirmation is required',
      }),
    })
    .strict()
    .refine(data => data.password === data.passwordConfirmation, {
      message: 'Passwords do not match',
      path: ['passwordConfirmation'],
    });

  return schema.safeParse(user);
};

const userLoginValidator = user => {
  const schema = z
    .object({
      email: z
        .string({required_error: 'Email is required'})
        .email('Please enter a valid email address'),
      password: z
        .string({required_error: 'Password is required'})
        .min(1, 'Password is required'),
    })
    .strict();

  return schema.safeParse(user);
};

export {
  userRegisterValidator as ValidateRegister,
  userLoginValidator as ValidateLogin,
};
