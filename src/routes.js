import Main from './components/Main';
import ScenicSpots from './components/ScenicSpots';

const ROUTES = [
  {
    path: '/',
    exact: true,
    component: Main,
  },
  {
    path: '/scenicSpot',
    exact: true,
    component: ScenicSpots,
  },
  {
    path: '/scenicSpot/:city',
    component: ScenicSpots,
  },
];

export default ROUTES;
