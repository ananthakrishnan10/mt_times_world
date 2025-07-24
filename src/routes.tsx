import type { RouteObject } from 'react-router-dom';
import { DashboardLayout, AuthLayout } from './layouts';
import { Home, Login, Register } from './pages';

const routes: RouteObject[] = [
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
];

export default routes;
