export enum HttpStatus {
  InternalServerError = 500,
}

export const HTTP_STATUS = {
  code: {
    BadRequest: 500,
    RequestFailed404: 404,
  },
  message: {
    BadRequest: 'Internal Server Error',
    RequestFailed404: 'Request failed with status code 404',
  },
};
