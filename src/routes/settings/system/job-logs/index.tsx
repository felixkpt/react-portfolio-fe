import DefaultLayout from "@/Layouts/Default/DefaultLayout"
import Index from '@/Pages/Settings/System/JobLogs/Index'

const relativeUri = 'settings/system/job-logs/'

const index = [

  {
    path: '',
    element: <DefaultLayout uri={relativeUri + ''} permission="" Component={Index} />,
  },

]

export default index