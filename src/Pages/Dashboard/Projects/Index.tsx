import Str from '@/utils/Str';
import useListSources from '@/hooks/list-sources/useListSources';
import AutoPage from '../../../components/Autos/AutoPage';

const Index = () => {
  // begin component common config
  const pluralName = 'Projects'
  const singularName = 'Projects'
  const uri = '/dashboard/projects'
  const componentId = Str.slug(pluralName)
  const search = true
  const columns = [
    {
      label: 'ID',
      key: 'id',
    },
    {
      key: 'title',
    },
    {
      key: 'company.name',
    },
    {
      key: 'start_date',
    },
    {
      key: 'end_date',
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