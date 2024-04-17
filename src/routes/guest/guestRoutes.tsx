import Home from '../default/home';
import Login from '@/Pages/Auth/Login';
import Register from '@/Pages/Auth/Register';
import Password from '@/Pages/Auth/Password';
import Error404 from '@/Pages/ErrorPages/Error404';
import PasswordSet from '@/Pages/Auth/PasswordSet';
import DefaultLayout from '@/Layouts/Default/DefaultLayout';
import GuestLayout from '@/Layouts/Guest/GuestLayout';

const guestRoutes = [
    {
        path: '/',
        element: <DefaultLayout uri='admin' permission={null} Component={Home} />,
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
        path: '*',
        element: <GuestLayout Component={Error404} />,
    },
]

export default guestRoutes