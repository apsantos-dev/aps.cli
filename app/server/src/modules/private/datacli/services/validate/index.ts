import { CONSTANTS } from '../../../../../shared/domains/constants';
import response from '../../../../../shared/domains/views/response_view';

export function checksIfDataCLIExists(data: any, message?: string, id?: any) {
  if (data) {
    return response.render(CONSTANTS.httpCode200, data, message);
  } else {
    return response.render(
      CONSTANTS.httpCode404,
      `${CONSTANTS.notFoundDataCLIInfo} - ID: ${id}`,
      message
    );
  }
}

export default {
  checksIfDataCLIExists,
};
