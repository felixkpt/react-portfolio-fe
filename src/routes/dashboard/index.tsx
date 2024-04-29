import aboutRoutes from '@/routes/dashboard/about';
import companiesRoutes from '@/routes/dashboard/companies';
import projectsRoutes from '@/routes/dashboard/projects';
import qualificationsRoutes from '@/routes/dashboard/qualifications';
import settingsRoutes from '@/routes/dashboard/settings';
import skillsRoutes from '@/routes/dashboard/skills';

const index = [
  {
    path: 'about',
    children: aboutRoutes,
  },
  {
    path: 'companies',
    children: companiesRoutes,
  },
  {
    path: 'projects',
    children: projectsRoutes,
  },
  {
    path: 'projects',
    children: projectsRoutes,
  },
  {
    path: 'qualifications',
    children: qualificationsRoutes,
  },
  {
    path: 'settings',
    children: settingsRoutes,
  },
  {
    path: 'skills',
    children: skillsRoutes,
  },
]

export default index