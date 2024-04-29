import Index from '@/Pages/About/Index';
import DefaultLayout from "@/Layouts/Default/DefaultLayout";

const relativeUri = 'about/'

const index = [

  {
    path: '',
    element: <DefaultLayout uri={relativeUri + ''} permission="" Component={Index} />,
  }
]

export default index