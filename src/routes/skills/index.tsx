import Index from '@/Pages/Skills/Index';
import DefaultLayout from "@/Layouts/Default/DefaultLayout";

const relativeUri = 'skills/'

const index = [

  {
    path: '',
    element: <DefaultLayout uri={relativeUri + ''} permission="" Component={Index} />,
  }
]

export default index