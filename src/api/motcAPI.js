import api from './index';
import { objToURLParams } from '../tools';

const motcAPI = {};

motcAPI.getAllScenicSpots = (urlParams = {}) => {
  return api.fire(
    {
      url: `/v2/Tourism/ScenicSpot${objToURLParams(urlParams)}`,
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    },
    process.env.REACT_APP_MOTC_API_HOST,
  );
};

motcAPI.getCityScenicSpots = (city, urlParams = {}) => {
  return api.fire(
    {
      url: `/v2/Tourism/ScenicSpot/${city}${objToURLParams(urlParams)}`,
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    },
    process.env.REACT_APP_MOTC_API_HOST,
  );
};

export default motcAPI;
