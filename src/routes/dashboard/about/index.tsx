import Index from '@/Pages/Dashboard/About/Index';
import CreateOrUpdate from '@/Pages/Dashboard/About/CreateOrUpdate';
import DefaultLayout from "@/Layouts/Default/DefaultLayout";

const relativeUri = 'about/'

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