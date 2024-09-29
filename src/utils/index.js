import { Screens } from "../screens";

export const PUBLIC_ROUTES = [
  {
    id: 1, 
    path: '/',
    page: <Screens.TheMain />
  },
  {
    id: 2,
    path: '/apartment/',
    page: <Screens.Apartment />
  },
  {
    id: 3,
    path: '/blocks/',
    page: <Screens.Blocks />
  },
  {
    id: 4,
    path: '/floors/',
    page: <Screens.Floors />
  },
  {
    id: 5,
    path: '/apartments/',
    page: <Screens.Main />
  },
  {
    id: 6,
    path: '/entrance/',
    page: <Screens.Entrance />
  },
]