import { createBrowserRouter } from 'react-router-dom';
import home from '@/routes/home/';
import about from '@/routes/about/';
import contactMe from '@/routes/contact-me/';
import projects from '@/routes/projects/';
import qualifications from '@/routes/qualifications/';
import skills from '@/routes/skills/';
import workExperiences from '@/routes/work-experiences/';
import Login from '@/Pages/Auth/Login';
import Register from '@/Pages/Auth/Register';
import Password from '@/Pages/Auth/Password';
import ResetPasswordConfirm from '@/Pages/Auth/ResetPasswordConfirm';
import PasswordSet from '@/Pages/Auth/PasswordSet';
import Error404 from '@/Pages/ErrorPages/Error404';
import userRoutes from '@/routes/user/index';
import dashboardRoutes from '@/routes/dashboard';
import GuestLayout from '@/Layouts/Guest/GuestLayout';
import TermsAndConditions from '../Pages/TermsAndConditions';
import PrivacyPolicy from '../Pages/PrivacyPolicy';

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
    path: '/contact-me',
    children: contactMe,
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
  }, {
    path: '/work-experiences',
    children: workExperiences,
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
    path: 'user',
    children: userRoutes
  },
  {
    path: '/dashboard',
    children: dashboardRoutes
  },
  {
    path: '/privacy-policy',
    element: <GuestLayout Component={PrivacyPolicy} />,
  },
  {
    path: '/terms-and-conditions',
    element: <GuestLayout Component={TermsAndConditions} />,
  },
  {
    path: '*',
    element: <GuestLayout Component={Error404} />,
  },
]);

export default router;
