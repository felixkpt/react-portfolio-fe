import AuthenticatedLayout from "@/Layouts/Default/DefaultLayout"
import Index from '@/Pages/Admin/Settings/System/PredictionsPerformance/Index'

const relativeUri = 'admin/settings/system/predictions-performance/'

const index = [

  {
    path: '',
    element: <AuthenticatedLayout uri={relativeUri + ''} permission="" Component={Index} />,
  },

]

export default index