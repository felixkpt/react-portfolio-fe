import DefaultLayout from "@/Layouts/Default/DefaultLayout";
import Projects from "@/Pages/Dashboard/Projects/Index";
import projectSlides from "./projects-slides";


const relativeUri = 'dashboard/projects/';

const index = [
    {
        path: '',
        element: <DefaultLayout uri={relativeUri + ''} permission="" Component={Projects} />,
    },
    {
        path: 'project-slides',
        children: projectSlides,
    },

];

export default index;
