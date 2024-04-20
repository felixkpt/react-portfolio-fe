import { createBrowserRouter } from 'react-router-dom';
import home from '@/routes/home/';
import about from '@/routes/about/';
import contacts from '@/routes/contacts/';
import experience from '@/routes/experience/';
import projects from '@/routes/projects/';
import qualifications from '@/routes/qualifications/';
import skills from '@/routes/skills/';
import Login from '@/Pages/Auth/Login';
import Register from '@/Pages/Auth/Register';
import Password from '@/Pages/Auth/Password';
import ResetPasswordConfirm from '@/Pages/Auth/ResetPasswordConfirm';
import PasswordSet from '@/Pages/Auth/PasswordSet';
import Error404 from '@/Pages/ErrorPages/Error404';
import adminRoutes from '@/routes/admin/adminRoutes';
import GuestLayout from '@/Layouts/Guest/GuestLayout';

const router = createBrowserRouter([
  {
    path: '/',
    children: home,
  },
  {
    path: '/home',
    children: home,
  },
  {
    path: '/about',
    children: about,
  },
  {
    path: '/contacts',
    children: contacts,
  },
  {
    path: '/experience',
    children: experience,
  },
  {
    path: '/projects',
    children: projects,
  },
  {
    path: '/qualifications',
    children: qualifications,
  },
  {
    path: '/skills',
    children: skills,
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
    path: '/reset-password-confirm',
    element: <GuestLayout Component={ResetPasswordConfirm} />,
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
