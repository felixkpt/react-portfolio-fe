import Index from '@/Pages/Projects/Index';
import CreateOrUpdate from '@/Pages/Projects/CreateOrUpdate';
import DefaultLayout from "@/Layouts/Default/DefaultLayout";

const relativeUri = 'projects/'

const index = [

  {
    path: '',
    element: <DefaultLayout uri={relativeUri + ''} permission="" Component={Index} />,
  },
  {
    path: 'create-or-update',
    element: <DefaultLayout uri={relativeUri + 'create-or-update'} permission="" Component={CreateOrUpdate} />,

  }
]

export default index