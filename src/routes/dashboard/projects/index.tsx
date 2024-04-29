import DefaultLayout from "@/Layouts/Default/DefaultLayout";
import ExperienceLevels from "@/Pages/Dashboard/Projects/Index";


const relativeUri = 'dashboard/projects/';

const index = [
    {
        path: '',
        element: <DefaultLayout uri={relativeUri + ''} permission="" Component={ExperienceLevels} />,
    },
];

export default index;
