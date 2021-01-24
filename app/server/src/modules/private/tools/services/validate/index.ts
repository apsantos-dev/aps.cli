import tools from '../../domains/views/tools_response_view';

import { CONSTANTS } from '../../../../../shared/domains/constants';

export function checksIfToolExists(data: any, message: any, id?: any) {
  if (data) {
    return tools.render(CONSTANTS.httpCode200, data, message);
  } else {
    return tools.render(
      CONSTANTS.httpCode404,
      `${CONSTANTS.notFoundToolInfo} - ID: ${id}`,
      message
    );
  }
}

export default {
  checksIfToolExists,
};
