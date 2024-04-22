import DefaultLayout from "@/Layouts/Default/DefaultLayout";
import Statuses from "@/Pages/Admin/Settings/Picklists/Companies/Index";


const relativeUri = 'admin/settings/picklists/companies/';

const index = [
    {
        path: '',
        element: <DefaultLayout uri={relativeUri + ''} permission="" Component={Statuses} />,
    },
];

export default index;
