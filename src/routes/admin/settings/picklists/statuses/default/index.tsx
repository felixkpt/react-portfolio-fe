import AuthenticatedLayout from "@/Layouts/Default/DefaultLayout";
import Statuses from "@/Pages/Admin/Settings/Picklists/Statuses/Default/Index";


const relativeUri = 'admin/settings/picklists/statuses/default/';

const index = [
    {
        path: '',
        element: <AuthenticatedLayout uri={relativeUri + ''} permission="" Component={Statuses} />,
    },
];

export default index;
