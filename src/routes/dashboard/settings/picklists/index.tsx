import statuses from '@/routes/dashboard/settings/picklists/statuses'
import experienceLevels from '@/routes/dashboard/settings/picklists/experience-levels'
import skillCategories from '@/routes/dashboard/settings/picklists/skill-categories'
import getInTouch from '@/routes/dashboard/settings/picklists/get-in-touch'

const index = [

    {
        path: 'statuses',
        children: statuses,
    },
    {
        path: 'experience-levels',
        children: experienceLevels,
    },
    {
        path: 'skill-categories',
        children: skillCategories,
    },
     {
        path: 'get-in-touch',
        children: getInTouch,
    },
]

export default index