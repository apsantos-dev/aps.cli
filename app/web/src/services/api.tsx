import axios from 'axios';

import * as CONSTANTS from 'src/shared/domains/constants';

const api = axios.create({
  baseURL: CONSTANTS.GENERIC.localhostAPI,
});

export default api;
