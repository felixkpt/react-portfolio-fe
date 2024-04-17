import AuthenticatedLayout from "@/Layouts/Default/DefaultLayout";
import Statuses from "@/Pages/Admin/Settings/Picklists/Statuses/Post/Index";

const relativeUri = 'admin/settings/picklists/statuses/post/';

const index = [
    {
        path: '',
        element: <AuthenticatedLayout uri={relativeUri + ''} permission="" Component={Statuses} />,
    },
];

export default index;
