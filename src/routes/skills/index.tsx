import DefaultLayout from '@/Layouts/Default/DefaultLayout';
import Error404 from '@/Pages/ErrorPages/Error404';

const skillsRoutes = [
  {
    path: '',
    element: <DefaultLayout uri='default' permission={null} Component={<>Test</>} />,
  },
  
];

export default skillsRoutes;
