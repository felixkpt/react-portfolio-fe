
import picklists from '@/routes/dashboard/settings/picklists'
import rolePermissions from '@/routes/dashboard/settings/role-permissions'
import users from '@/routes/dashboard/settings/users';

const index = [
  {
    path: 'users',
    children: users,
  },

  {
    path: 'picklists',
    children: picklists,
  },
  {
    path: 'role-permissions',
    children: rolePermissions,
  },
]

export default index