import { CONSTANTS } from '../../../../../shared/domains/constants';
import response from '../../../../../shared/domains/views/response_view';

export function checksIfSocialNetworkExists(
  data: any,
  message?: string,
  id?: any
) {
  if (data) {
    return response.render(CONSTANTS.httpCode200, data, message);
  } else {
    return response.render(
      CONSTANTS.httpCode404,
      `${CONSTANTS.notFoundSocialNetworkInfo} - ID: ${id}`,
      message
    );
  }
}

export default {
  checksIfSocialNetworkExists,
};
