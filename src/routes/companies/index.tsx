import Index from '@/Pages/Contacts/Index';
import CreateOrUpdate from '@/Pages/Contacts/CreateOrUpdate';
import DefaultLayout from "@/Layouts/Default/DefaultLayout";

const relativeUri = 'contacts/'

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