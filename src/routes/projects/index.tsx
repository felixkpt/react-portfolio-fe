import Index from '@/Pages/Projects/Index';
import DefaultLayout from "@/Layouts/Default/DefaultLayout";

const relativeUri = 'projects/'

const index = [

  {
    path: '',
    element: <DefaultLayout uri={relativeUri + ''} permission="" Component={Index} />,
  }
]

export default index