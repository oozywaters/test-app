import Home from './Home';
import Projects from './Projects';
import Logout from "./Logout";

export default [
  {
    key: 'home',
    path: '/',
    exact: true,
    sidebar: null,
    main: Home,
  },
  {
    key: 'projects',
    path: '/projects',
    sidebar: null,
    main: Projects,
  },
  {
    key: 'logout',
    path: '/',
    sidebar: null,
    main: Logout,
  },
];
