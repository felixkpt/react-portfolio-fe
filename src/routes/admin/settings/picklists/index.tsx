import statuses from '@/routes/admin/settings/picklists/statuses'
import companies from '@/routes/admin/settings/picklists/companies'
import experienceLevels from '@/routes/admin/settings/picklists/experience-levels'
import skillCategories from '@/routes/admin/settings/picklists/skill-categories'

const index = [

    {
        path: 'statuses',
        children: statuses,
    },
    {
        path: 'companies',
        children: companies,
    },
    {
        path: 'experience-levels',
        children: experienceLevels,
    },
    {
        path: 'skill-categories',
        children: skillCategories,
    },
]

export default index