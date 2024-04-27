
import defaultStatuses from '@/routes/settings/picklists/statuses/default'
import post from '@/routes/settings/picklists/statuses/post'

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