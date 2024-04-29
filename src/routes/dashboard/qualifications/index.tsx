import DefaultLayout from "@/Layouts/Default/DefaultLayout";
import ExperienceLevels from "@/Pages/Dashboard/Qualifications/Index";


const relativeUri = 'dashboard/qualifications/';

const index = [
    {
        path: '',
        element: <DefaultLayout uri={relativeUri + ''} permission="" Component={ExperienceLevels} />,
    },
];

export default index;
