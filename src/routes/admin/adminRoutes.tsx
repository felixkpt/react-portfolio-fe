import settings from './settings';
import DefaultLayout from '@/Layouts/Default/DefaultLayout';
import Error404 from '@/Pages/ErrorPages/Error404';

const adminRoutes = [
{
    path: 'settings',
    children: settings,
  },
  {
    path: '*',
    element: <DefaultLayout uri='error-404' permission={null} Component={Error404} />,
  },
];

export default adminRoutes;
