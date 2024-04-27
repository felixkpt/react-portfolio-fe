import DefaultLayout from "@/Layouts/Default/DefaultLayout";
import Statuses from "@/Pages/Settings/Picklists/ExperienceLevels/Index";


const relativeUri = 'settings/picklists/experience-levels/';

const index = [
    {
        path: '',
        element: <DefaultLayout uri={relativeUri + ''} permission="" Component={Statuses} />,
    },
];

export default index;
