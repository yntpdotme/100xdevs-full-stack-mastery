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

      confirmPassword: z.string({
        required_error: 'Password Confirmation is required',
      }),
    })
    .strict()
    .refine(data => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
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

const userUpdateValidator = user => {
  const nameSchema = z
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

  const passwordSchema = z
    .object({
      oldPassword: z
        .string({required_error: 'Old Password is required'})
        .min(1, 'Old Password is required'),

      newPassword: z
        .string({required_error: 'New Password is required'})
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
      }
    );

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

      oldpassword: z
        .string({required_error: 'Old Password is required'})
        .min(1, 'Old Password is required'),

      newPassword: z
        .string({required_error: 'New Password is required'})
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

      confirmNewPassword: z.string({
        required_error: 'Password Confirmation is required',
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
      }
    );

  if (!user.name) {
    return passwordSchema.safeParse(user);
  } else if (!user.oldpassword) {
    return nameSchema.safeParse(user);
  }

  return schema.safeParse(user);
};

export {
  userRegisterValidator as ValidateRegister,
  userLoginValidator as ValidateLogin,
  userUpdateValidator as ValidateUpdate,
};
