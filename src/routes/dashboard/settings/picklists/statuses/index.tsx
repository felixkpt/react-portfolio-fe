
import defaultStatuses from '@/routes/dashboard/settings/picklists/statuses/default'
import post from '@/routes/dashboard/settings/picklists/statuses/post'

const index = [

    {
        path: 'default',
        children: defaultStatuses,
    },
    {
        path: 'post',
        children: post,
    },
]

export default index