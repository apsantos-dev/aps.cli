import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    const errors: ValidationErrors = {};

    error.inner.forEach((err: any) => {
      errors[err.path] = err.errors;
    });

    return response.status(400).json({
      data: {
        code: 400,
        info: '',
        message: 'Validation fails',
        errors,
      },
    });
  }

  return response.status(500).json({
    data: {
      code: 500,
      info: '',
      message: 'Internal server error',
    },
  });
};

export default errorHandler;
