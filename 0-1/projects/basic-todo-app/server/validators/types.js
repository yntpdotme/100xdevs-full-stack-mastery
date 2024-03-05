import z from 'zod';

// Validation Logic for Todo Creation
const validateTodoCreation = todo => {
  const schema = z
    .object({
      title: z
        .string({
          required_error: 'Title is required',
          invalid_type_error: 'Title must be a string',
        })
        .trim()
        .min(3, {message: 'Must be 3 or more characters long'})
        .max(255, {message: 'Must be 255 or fewer characters long'}),

      description: z
        .string({
          required_error: 'Description is required',
          invalid_type_error: 'Description must be a string',
        })
        .trim()
        .min(3, {message: 'Must be 3 or more characters long'})
        .max(1024, {message: 'Must be 1024 or fewer characters long'}),
    })
    .strict();

  return schema.safeParse(todo);
};

// Validation Logic for Todo Update
const validateTodoUpdate = todo => {
  const schema = z
    .object({
      title: z
        .string({
          invalid_type_error: 'Title must be a string',
        })
        .trim()
        .min(3, {message: 'Must be 3 or more characters long'})
        .max(255, {message: 'Must be 255 or fewer characters long'})
        .optional(),

      description: z
        .string({invalid_type_error: 'Description must be a string'})
        .trim()
        .min(3, {message: 'Must be 3 or more characters long'})
        .max(1024, {message: 'Must be 1024 or fewer characters long'})
        .optional(),

      isComplete: z.boolean().optional(),
    })
    .strict();

  // Check if at least one field is present for updating
  if (!todo.title && !todo.description && todo.isComplete === undefined) {
    return {
      success: false,
      error: 'At least one field is required for updating',
    };
  }

  return schema.safeParse(todo);
};

export {
  validateTodoCreation as validateCreation,
  validateTodoUpdate as validateUpdate,
};
