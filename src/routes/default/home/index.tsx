import DefaultLayout from "@/Layouts/Default/DefaultLayout";
import Home from "@/Pages/Default/Home/Index";

const relativeUri = 'home/';

const routes = [
    {
        path: `/`,
        element: <DefaultLayout uri={`${relativeUri}`} permission="" Component={Home} />,
    },
];

export default routes;
