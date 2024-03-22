import {errorHandler} from '../middlewares/error.middlewares.js';

/**
 * @description Common Error class to throw an error from anywhere.
 * The {@link errorHandler} middleware will catch this error at the central place and it will return an appropriate response to the client
 */
class ApiError extends Error {
  /**
   *
   * @param {number} statusCode
   * @param {string} message
   * @param {any[]} errors
   * @param {string} stack
   * @param {string} authenticate
   */
  constructor(
    statusCode,
    message = 'Something went wrong',
    errors = [],
    stack = '',
    authenticate = null,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (authenticate) {
      this.headers = {
        'WWW-Authenticate': authenticate,
      };
    }

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }

  }
}

export {ApiError};
