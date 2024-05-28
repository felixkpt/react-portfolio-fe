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
      const resp = await get('/dashboard/settings/role-permissions/roles' + prepareParams(search))
      return res.results.data || []
    },

    async directPermissionsList(search?: string) {
      const resp = await get('/dashboard/settings/role-permissions/permissions' + prepareParams(search))
      return res.results.data || []
    },

  }

  const posts = {

    async parentCategoryId(search?: string) {
      const resp = await get('/dashboard/posts/categories' + prepareParams(search))
      return res.results.data || []

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
      const resp = await get('/dashboard/companies' + prepareParams(search))
      return resp.results?.data || []
    },
    async skillId(search?: string) {
      const resp = await get('/dashboard/skills' + prepareParams(search))
      return resp.results?.data || []
    },
    async skillIds(search?: string) {
      const resp = await get('/dashboard/skills' + prepareParams(search))
      return resp.results?.data || []
    },
    async skillCategoryId(search?: string) {
      const resp = await get('/dashboard/settings/picklists/skill-categories' + prepareParams(search))
      return resp.results?.data || []
    },
    async experienceLevelId(search?: string) {
      const resp = await get('/dashboard/settings/picklists/experience-levels' + prepareParams(search))
      return resp.results?.data || []
    },
    async projectId(search?: string) {
      const resp = await get('/dashboard/projects' + prepareParams(search))
      const data = resp.results?.data || []
      if (data) {
        data.map((itm) => {
          itm['name'] = itm.title
          return itm
        });
      }

      return data
    },

  }

  return {
    rolePermissions,
    posts,
    portfolio,
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