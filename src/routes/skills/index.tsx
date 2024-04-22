import Index from '@/Pages/Skills/Index';
import CreateOrUpdate from '@/Pages/Skills/CreateOrUpdate';
import DefaultLayout from "@/Layouts/Default/DefaultLayout";

const relativeUri = 'skills/'

const index = [

  {
    path: '',
    element: <DefaultLayout uri={relativeUri + ''} permission="" Component={Index} />,
  },
  {
    path: 'create-or-update',
    element: <DefaultLayout uri={relativeUri + 'create-or-update'} permission="" Component={CreateOrUpdate} />,
  },
  {
    path: 'create',
    element: <DefaultLayout uri={relativeUri + 'create'} permission={relativeUri + ''} method="post" Component={CreateOrUpdate} />,
  },
  {
    path: 'view/:id/edit',
    element: <DefaultLayout uri={relativeUri + 'view/:id'} permission="" method="put" Component={CreateOrUpdate} />,
  }
]

export default index