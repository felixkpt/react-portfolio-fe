import DefaultLayout from "@/Layouts/Default/DefaultLayout";
import Statuses from "@/Pages/Settings/Picklists/GetInTouch/Index";


const relativeUri = 'settings/picklists/get-in-touch/';

const index = [
    {
        path: '',
        element: <DefaultLayout uri={relativeUri + ''} permission="" Component={Statuses} />,
    },
];

export default index;
