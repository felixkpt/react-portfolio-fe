import { ListSourceInterface } from '@/interfaces/UncategorizedInterfaces';
import useAxios from '../useAxios'

const useListSources = (params?: string) => {

  const { get } = useAxios()

  const rolePermissions = {

    guardName: async () => {
      return [
        {
          id: 'web',
          name: 'web',
        },
        {
          id: 'api',
          name: 'api',
        }
      ] as ListSourceInterface[];
    },

    async rolesList(search?: string) {
      const res = await get('/dashboard/settings/role-permissions/roles' + prepareParams(search)).then((res) => res.data || [])
      return res || []

    },

    async directPermissionsList(search?: string) {
      const res = await get('/dashboard/settings/role-permissions/permissions' + prepareParams(search)).then((res) => res.data || [])
      return res || []

    },

  }

  const posts = {

    async parentCategoryId(search?: string) {
      const res = await get('/admin/posts/categories' + prepareParams(search)).then((res) => res.data || [])
      return res || []

    },

  }

  const booleanOptions: ListSourceInterface[] = [
    {
      id: '1',
      name: 'Yes',
    },
    {
      id: '0',
      name: 'No',
    }
  ]

  const portfolio = {

    async companyId(search?: string) {
      const res = await get('/dashboard/companies' + prepareParams(search)).then((res) => res.data || [])
      return res || []
    },
    async skillId(search?: string) {
      const res = await get('/dashboard/skills' + prepareParams(search)).then((res) => res.data || [])
      return res || []
    },
    async skillIds(search?: string) {
      const res = await get('/dashboard/skills' + prepareParams(search)).then((res) => res.data || [])
      return res || []
    },
    async skillCategoryId(search?: string) {
      const res = await get('/dashboard/settings/picklists/skill-categories' + prepareParams(search)).then((res) => res.data || [])
      return res || []
    },
    async experienceLevelId(search?: string) {
      const res = await get('/dashboard/settings/picklists/experience-levels' + prepareParams(search)).then((res) => res.data || [])
      return res || []
    },

  }

  return {
    rolePermissions,
    posts,
    portfolio,
    booleanOptions
  }

  function prepareParams(search: string | undefined) {
    let query

    if (params)
      query = params + '&search=' + search
    else
      query = '?search=' + search

    return query
  }

}


export default useListSources