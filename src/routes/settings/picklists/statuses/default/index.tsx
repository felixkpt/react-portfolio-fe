import DefaultLayout from "@/Layouts/Default/DefaultLayout";
import Statuses from "@/Pages/Settings/Picklists/Statuses/Default/Index";


const relativeUri = 'settings/picklists/statuses/default/';

const index = [
    {
        path: '',
        element: <DefaultLayout uri={relativeUri + ''} permission="" Component={Statuses} />,
    },
];

export default index;
