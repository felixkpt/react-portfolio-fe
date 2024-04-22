import DefaultLayout from "@/Layouts/Default/DefaultLayout";
import Statuses from "@/Pages/Admin/Settings/Picklists/ExperienceLevels/Index";


const relativeUri = 'admin/settings/picklists/experience-levels/';

const index = [
    {
        path: '',
        element: <DefaultLayout uri={relativeUri + ''} permission="" Component={Statuses} />,
    },
];

export default index;
