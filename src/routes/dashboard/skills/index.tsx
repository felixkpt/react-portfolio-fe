import DefaultLayout from "@/Layouts/Default/DefaultLayout";
import ExperienceLevels from "@/Pages/Dashboard/Skills/Index";


const relativeUri = 'dashboard/skills/';

const index = [
    {
        path: '',
        element: <DefaultLayout uri={relativeUri + ''} permission="" Component={ExperienceLevels} />,
    },
];

export default index;
