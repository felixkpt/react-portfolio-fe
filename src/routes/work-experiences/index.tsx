import Index from '@/Pages/WorkExperiences/Index';
import DefaultLayout from "@/Layouts/Default/DefaultLayout";

const relativeUri = 'work-experiences/'

const index = [

  {
    path: '',
    element: <DefaultLayout uri={relativeUri + ''} permission="" Component={Index} />,
  }
]

export default index