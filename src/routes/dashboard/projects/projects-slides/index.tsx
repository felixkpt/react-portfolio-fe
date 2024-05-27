import DefaultLayout from "@/Layouts/Default/DefaultLayout";
import ProjectSlides from "@/Pages/Dashboard/Projects/ProjectSlides/Index";


const relativeUri = 'dashboard/projects/';

const index = [
    {
        path: '',
        element: <DefaultLayout uri={relativeUri + ''} permission="" Component={ProjectSlides} />,
    },
];

export default index;
