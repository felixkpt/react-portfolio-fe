import AutoTable from '@/components/Autos/AutoTable';
import AutoModal from '@/components/Autos/AutoModal';
import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import useListSources from '@/hooks/apis/useListSources';

const Index = () => {

  const [modelDetails, setModelDetails] = useState({})

  const { rolePermissions: list_sources } = useListSources();

  return (
    <div>
      <PageHeader title={'Permissions List'} action="button" actionText="Create permission" actionTargetId="CreatePermissionModal" permission='/dashboard/settings/role-permissions/permissions' />
      <AutoTable
        baseUri='/dashboard/settings/role-permissions/permissions'
        columns={[
          {
            label: 'ID',
            key: 'id',
          },
          {
            label: 'Permission Name',
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
        ]}
        getModelDetails={setModelDetails}
        search={true}
        list_sources={list_sources}
        tableId='permissionsTable'
      />
      {
        modelDetails && <><AutoModal id={`CreatePermissionModal`} modelDetails={modelDetails} actionUrl='/dashboard/settings/role-permissions/permissions' list_sources={list_sources} /></>
      }
    </div>
  );
};

export default Index;

