
import joblogs from '@/routes/settings/system/job-logs/index';
import predictionsPerformance from '@/routes/settings/system/predictions-performance/index';

const index = [

  {
    path: 'job-logs',
    children: joblogs,
  },
  {
    path: 'predictions-performance',
    children: predictionsPerformance,
  },

]

export default index