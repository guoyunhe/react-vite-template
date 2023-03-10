import { RequireAuth } from '@guoyunhe/react-auth';
import { RouteObject } from 'react-router-dom';
import AdminLayout from './layouts/admin';
import AppLayout from './layouts/app';
import AuthLayout from './layouts/auth';
import LandingLayout from './layouts/landing';
import NotFound from './pages/error/not-found';
import Home from './pages/home';
import Login from './pages/login';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LandingLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
  {
    path: 'app',
    element: (
      <RequireAuth>
        <AppLayout />
      </RequireAuth>
    ),
  },
  {
    path: 'admin',
    element: (
      <RequireAuth>
        <AdminLayout />
      </RequireAuth>
    ),
  },
];

export default routes;
