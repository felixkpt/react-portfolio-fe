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
      const res = await get('/dashboard/settings/role-permissions/roles' + prepareParams(search))
      return res.results.data || []
    },

    async directPermissionsList(search?: string) {
      const res = await get('/dashboard/settings/role-permissions/permissions' + prepareParams(search))
      return res.results.data || []
    },

  }

  const posts = {

    async parentCategoryId(search?: string) {
      const res = await get('/dashboard/posts/categories' + prepareParams(search))
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

  const competitions = {

    async hasCompetitions() {
      return booleanOptions
    },
    async hasTeams() {
      return booleanOptions
    },
    async continentId(search?: string) {
      const res = await get('/dashboard/continents' + prepareParams(search))
      return res.results.data || []

    },
    async countryId(search?: string) {
      const res = await get('/dashboard/countries' + prepareParams(search))
      return res.results.data || []

    },
    async nationalityId(search?: string) {
      const res = await get('/dashboard/countries' + prepareParams(search))
      return res.results.data || []
    },
    async addressId(search?: string) {
      const res = await get('/dashboard/teams/addresses' + prepareParams(search))
      return res.results.data || []
    },
    async venueId(search?: string) {
      const res = await get('/dashboard/teams/venues' + prepareParams(search))
      return res.results.data || []
    },
    async coachId(search?: string) {
      const res = await get('/dashboard/teams/coaches' + prepareParams(search))
      return res.results.data || []
    },
    async competitionId(search?: string) {
      const res = await get('/dashboard/competitions' + prepareParams(search))
      return res.results.data || []
    },
    async teamId(search?: string) {
      const res = await get('/dashboard/teams' + prepareParams(search))
      return res.results.data || []
    },

  }

  const tips = {
    async bettingStrategyId(search?: string) {
      const res = await get('/dashboard/settings/picklists/betting-strategies' + prepareParams(search))
      return res.results.data || []
    },
    async subscriptionDurationId(search?: string) {
      const res = await get('/dashboard/settings/picklists/subscription-duration' + prepareParams(search))
      return res.results.data || []
    },
    async advantagesList(search?: string) {
      const res = await get('/dashboard/settings/picklists/betting-strategies-pro-cons' + prepareParams(`${search}&type=advantage`))
      return res.results.data || []
    },
    async disadvantagesList(search?: string) {
      const res = await get('/dashboard/settings/picklists/betting-strategies-pro-cons' + prepareParams(`${search}&type=disadvantage`))
      return res.results.data || []
    },
  }

  return {
    rolePermissions,
    posts,
    competitions,
    tips,
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