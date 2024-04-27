import DefaultLayout from "@/Layouts/Default/DefaultLayout"
import Index from '@/Pages/Settings/System/PredictionsPerformance/Index'

const relativeUri = 'settings/system/predictions-performance/'

const index = [

  {
    path: '',
    element: <DefaultLayout uri={relativeUri + ''} permission="" Component={Index} />,
  },

]

export default index