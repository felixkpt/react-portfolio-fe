
import picklists from '@/routes/settings/picklists'
import rolePermissions from '@/routes/settings/role-permissions'
import users from '@/routes/settings/users';
import system from '@/routes/settings/system/index';

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
  },{
    path: 'system',
    children: system,
  },
]

export default index