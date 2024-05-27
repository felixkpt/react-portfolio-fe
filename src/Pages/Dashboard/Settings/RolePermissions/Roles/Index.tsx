import Str from '@/utils/Str';
import AutoPage from '@/components/Autos/AutoPage';
import useListSources from '@/hooks/list-sources/useListSources';

const Index = () => {
  // begin component common config
  const pluralName = 'Roles'
  const singularName = 'Role'
  const uri = '/dashboard/settings/role-permissions/roles'
  const componentId = Str.slug(pluralName)
  const search = true
  const columns = [
    {
      label: 'ID',
      key: 'id',
    },
    {
      label: 'Role Name',
      key: 'name',
    },
    {
      label: 'Guard Name',
      key: 'guard_name',
    },
    { key: 'Created_by' },
    {
      label: 'Created At',
      key: 'Created_at',
    },
    {
      label: 'Status',
      key: 'Status',
    },
    {
      label: 'Action',
      key: 'action',
    },
  ]
  // end component common config

  const { rolePermissions: listSources } = useListSources();

  return <AutoPage pluralName={pluralName} singularName={singularName} uri={uri} columns={columns} componentId={componentId} search={search} listSources={listSources} />;
};

export default Index;