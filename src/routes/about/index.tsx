import Index from '@/Pages/About/Index';
import UpdateOrCreate from '@/Pages/About/UpdateOrCreate';
import DefaultLayout from "@/Layouts/Default/DefaultLayout";

const relativeUri = 'about/'

const index = [

  {
    path: '',
    element: <DefaultLayout uri={relativeUri + ''} permission="" Component={Index} />,
  },
  {
    path: 'update-or-create',
    element: <DefaultLayout uri={relativeUri + 'update-or-create'} permission="" Component={UpdateOrCreate} />,

  }
]

export default index