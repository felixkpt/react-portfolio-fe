import CreateOrUpdateUser from "@/Pages/Settings/Users/CreateOrUpdateUser"
import Users from '@/Pages/Settings/Users/Index';
import Detail from "@/Pages/Settings/Users/View/Index"
import DefaultLayout from "@/Layouts/Default/DefaultLayout";

const relativeUri = 'settings/users/'

const index = [

  {
    path: '',
    element: <DefaultLayout uri={relativeUri + ''} permission="" Component={Users} />,
  },
  {
    path: 'create',
    element: <DefaultLayout uri={relativeUri + 'create'} permission={relativeUri + ''} method="post" Component={CreateOrUpdateUser} />,

  },
  {
    path: 'view/:id/edit',
    element: <DefaultLayout uri={relativeUri + 'view/:id'} permission="" method="put" Component={CreateOrUpdateUser} />,
  },
  {
    path: 'view/:id',
    element: <DefaultLayout uri={relativeUri + 'view/:id'} permission="" Component={Detail} />,
  },

]

export default index