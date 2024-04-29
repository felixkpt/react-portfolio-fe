import DefaultLayout from "@/Layouts/Default/DefaultLayout";
import Statuses from "@/Pages/Dashboard/Settings/Picklists/SkillCategories/Index";


const relativeUri = 'dashboard/settings/picklists/skill-categories/';

const index = [
    {
        path: '',
        element: <DefaultLayout uri={relativeUri + ''} permission="" Component={Statuses} />,
    },
];

export default index;
