import Index from '@/Pages/Experience/Index';
import CreateOrUpdate from '@/Pages/Experience/CreateOrUpdate';
import DefaultLayout from "@/Layouts/Default/DefaultLayout";

const relativeUri = 'experience/'

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