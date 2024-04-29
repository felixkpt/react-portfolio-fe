import Index from '@/Pages/Qualifications/Index';
import DefaultLayout from "@/Layouts/Default/DefaultLayout";

const relativeUri = 'qualifications/'

const index = [

  {
    path: '',
    element: <DefaultLayout uri={relativeUri + ''} permission="" Component={Index} />,
  }
]

export default index