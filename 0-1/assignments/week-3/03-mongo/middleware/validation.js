const zod = require('zod');

const validate = user => {
  const schema = zod.object({
    username: zod.string().min(2),
    password: zod.string().min(5),
  });

  return schema.safeParse(user);
};

const validateCourse = course => {
  const schema = zod.object({
    title: zod.string().min(2),
    description: zod.string().min(5),
    image: zod.string().trim().url(),
    price: zod.number().nonnegative(),
  });

  return schema.safeParse(course);
};

module.exports.validate = validate;
module.exports.validateCourse = validateCourse;
