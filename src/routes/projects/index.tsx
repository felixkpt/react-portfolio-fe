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
    path: 'create',
    element: <DefaultLayout uri={relativeUri + 'create'} permission={relativeUri + ''} method="post" Component={CreateOrUpdate} />,
  },
  {
    path: 'view/:id/edit',
    element: <DefaultLayout uri={relativeUri + 'view/:id'} permission="" method="put" Component={CreateOrUpdate} />,
  },
]

export default index