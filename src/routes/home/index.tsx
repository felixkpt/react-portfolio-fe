import Index from '@/Pages/Home/Index';
import DefaultLayout from "@/Layouts/Default/DefaultLayout";

const relativeUri = 'home/'

const index = [

  {
    path: '',
    element: <DefaultLayout uri={relativeUri + ''} permission="" Component={Index} />,
  }
]

export default index