import apiClient from 'services/apiService';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import moment from 'moment';

export const recommendService = {
  getAddress(params) {
    return apiClient.request({
      method: 'GET',
      url: `/api/v1/getAddress`,
      params: params,
    });
  },
};
