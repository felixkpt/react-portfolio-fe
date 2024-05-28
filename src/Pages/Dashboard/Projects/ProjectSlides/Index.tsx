import Str from '@/utils/Str';
import useListSources from '@/hooks/list-sources/useListSources';
import AutoPage from '../../../../components/Autos/AutoPage';

const Index = () => {
  // begin component common config
  const pluralName = 'Project Slides'
  const singularName = 'Project Slide'
  const uri = '/dashboard/projects/project-slides'
  const componentId = Str.slug(pluralName)
  const search = true
  const columns = [
    {
      label: 'ID',
      key: 'id',
    },
    {
      key: 'project.title',
    },
    {
      key: 'image',
    },
    {
      key: 'caption',
    },
    {
      label: 'Priority',
      key: 'priority',
    },
    { key: 'Created_by' },
    {
      label: 'Created At',
      key: 'Created_at',
    },
    {
      label: 'Action',
      key: 'action',
    },
  ]
  // end component common config

  const { portfolio: listSources } = useListSources()

  return <AutoPage pluralName={pluralName} singularName={singularName} uri={uri} columns={columns} componentId={componentId} search={search} listSources={listSources} />;
};

export default Index;