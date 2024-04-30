import Index from '@/Pages/Projects/Index';
import Project from '@/Pages/Projects/View/Index';
import DefaultLayout from "@/Layouts/Default/DefaultLayout";

const relativeUri = 'projects/'

const index = [

  {
    path: '',
    element: <DefaultLayout uri={relativeUri + ''} permission="" Component={Index} />,
  },
  {
      path: 'view/:id',
      element: <DefaultLayout uri={relativeUri + 'view/:id'} permission="" Component={Project} />,
  },
]

export default index