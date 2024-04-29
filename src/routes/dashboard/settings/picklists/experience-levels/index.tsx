import DefaultLayout from "@/Layouts/Default/DefaultLayout";
import ExperienceLevels from "@/Pages/Dashboard/Settings/Picklists/ExperienceLevels/Index";


const relativeUri = 'dashboard/settings/picklists/experience-levels/';

const index = [
    {
        path: '',
        element: <DefaultLayout uri={relativeUri + ''} permission="" Component={ExperienceLevels} />,
    },
];

export default index;
