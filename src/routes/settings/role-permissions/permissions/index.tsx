import Permissions from '@/Pages/Settings/RolePermissions/Permissions/Index';
import CreateOrUpdatePermission from '@/Pages/Settings/RolePermissions/Permissions/CreateOrUpdatePermission';
import DefaultLayout from '@/Layouts/Default/DefaultLayout';

const relativeUri = 'settings/role-permissions/permissions/';

const index = [
    {
        path: '',
        element: <DefaultLayout uri={relativeUri} permission="" Component={Permissions} />,
    },
    {
        path: 'create',
        element: <DefaultLayout uri={relativeUri + 'create'} permission={relativeUri + ''} method="post" Component={CreateOrUpdatePermission} />,
    },
    {
        path: 'view/:id/edit',
        element: <DefaultLayout uri={relativeUri + 'view/:id'} permission="" method="put" Component={CreateOrUpdatePermission} />,
    },
];

export default index;