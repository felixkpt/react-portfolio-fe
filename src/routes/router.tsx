import { createBrowserRouter } from 'react-router-dom';
import Home from '@/routes/default/home/';
import About from '@/routes/about/';
import Login from '@/Pages/Auth/Login';
import Register from '@/Pages/Auth/Register';
import Password from '@/Pages/Auth/Password';
import Error404 from '@/Pages/ErrorPages/Error404';
import PasswordSet from '@/Pages/Auth/PasswordSet';
import adminRoutes from '@/routes/admin/adminRoutes';
import GuestLayout from '@/Layouts/Guest/GuestLayout';
import DefaultLayout from '@/Layouts/Default/DefaultLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout uri='admin' permission={null} Component={Home} />,
  },
  {
    path: '/about',
    children: About,
  },
  {
    path: '/login',
    element: <GuestLayout Component={Login} />,
  },
  {
    path: '/register',
    element: <GuestLayout Component={Register} />,
  },
  {
    path: '/password',
    element: <GuestLayout Component={Password} />,
  },
  {
    path: '/password-set/:token',
    element: <GuestLayout Component={PasswordSet} />,

  },
  {
    path: 'admin',
    children: adminRoutes
  },

  {
    path: '*',
    element: <GuestLayout Component={Error404} />,
  },
]);

export default router;
