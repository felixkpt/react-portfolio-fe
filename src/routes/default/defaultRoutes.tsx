import Home from './home';
import DefaultLayout from '@/Layouts/Default/DefaultLayout';
import Error404 from '@/Pages/ErrorPages/Error404';

const defaultRoutes = [
  {
    path: '',
    element: <DefaultLayout uri='default' permission={null} Component={Home} />,
  },
  
];

export default defaultRoutes;
