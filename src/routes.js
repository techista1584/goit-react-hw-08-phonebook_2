const { lazy } = require("react");

export const routes = [
  {
    path: '/register',
    label: 'Register',
    exact: true,
    restricted: true,
    private: false,
    component: lazy(() => import('./components/views/RegisterView')), 
  },
  {
    path: '/login',
    label: 'Login',
    exact: true,
    restricted: true,
    private: false,
    component: lazy(() => import('./components/views/LoginView'))
  },
  {
    path: '/contacts',
    label: 'Contacts',
    exact: true,
    restricted: false,
    private: true,
    component: lazy(() => import('./components/views/ContactsView'))
  },    
];
