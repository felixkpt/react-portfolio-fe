import statuses from '@/routes/settings/picklists/statuses'
import experienceLevels from '@/routes/settings/picklists/experience-levels'
import skillCategories from '@/routes/settings/picklists/skill-categories'
import getInTouch from '@/routes/settings/picklists/get-in-touch'

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