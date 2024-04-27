import Index from '@/Pages/ContactMe/Index';
import DefaultLayout from "@/Layouts/Default/DefaultLayout";

const relativeUri = 'contact-me/'

const index = [

  {
    path: '',
    element: <DefaultLayout uri={relativeUri + ''} permission="" Component={Index} />,
  },
]

export default index