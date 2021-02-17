import api from './index';

const motcAPI = {};

motcAPI.getAllScenicSpot = () => {
  return api.fire(
    {
      url: `/v2/Tourism/ScenicSpot`,
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    },
    process.env.REACT_APP_MOTC_API_HOST,
  );
};

motcAPI.getCityScenicSpot = (city) => {
  return api.fire(
    {
      url: `/v2/Tourism/ScenicSpot/${city}`,
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    },
    process.env.REACT_APP_MOTC_API_HOST,
  );
};

export default motcAPI;
