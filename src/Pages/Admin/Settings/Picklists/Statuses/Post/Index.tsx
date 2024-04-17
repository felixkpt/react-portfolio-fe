import AutoTable from '@/components/AutoTable';
import AutoModal from '@/components/AutoModal';
import { useState } from 'react';

const Index = () => {

  const [modelDetails, setModelDetails] = useState({})

  return (
    <div>
      <h3>Post Statuses List</h3>
      <div>
        <div className='d-flex justify-content-end'>
          <button type="button" className="btn btn-info text-white" data-bs-toggle="modal" data-bs-target="#Statuses">Create status</button>
        </div>
        <AutoTable
          baseUri='/admin/settings/picklists/statuses/post'
          columns={[
            {
              label: 'ID',
              key: 'id',
            },
            {
              label: 'Status Name',
              key: 'name',
            },
            {
              label: 'Icon',
              key: 'Icon',
            },
            {
              label: 'Class',
              key: 'class',
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
          ]}
          getModelDetails={setModelDetails}
          search={true}
          tableId='postStatusesTable'
        />
      </div>
      {
        modelDetails && <><AutoModal id={`Statuses`} modelDetails={modelDetails} actionUrl='/admin/settings/picklists/statuses/post' /></>
      }
    </div>
  );
};

export default Index;