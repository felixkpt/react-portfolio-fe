import DefaultLayout from "@/Layouts/Default/DefaultLayout";
import ExperienceLevels from "@/Pages/Dashboard/Companies/Index";


const relativeUri = 'dashboard/companies/';

const index = [
    {
        path: '',
        element: <DefaultLayout uri={relativeUri + ''} permission="" Component={ExperienceLevels} />,
    },
];

export default index;
