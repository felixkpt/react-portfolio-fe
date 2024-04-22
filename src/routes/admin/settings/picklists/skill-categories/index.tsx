import DefaultLayout from "@/Layouts/Default/DefaultLayout";
import Statuses from "@/Pages/Admin/Settings/Picklists/SkillCategories/Index";


const relativeUri = 'admin/settings/picklists/skill-categories/';

const index = [
    {
        path: '',
        element: <DefaultLayout uri={relativeUri + ''} permission="" Component={Statuses} />,
    },
];

export default index;
