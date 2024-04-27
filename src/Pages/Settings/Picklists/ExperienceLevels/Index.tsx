import AutoTable from '@/components/AutoTable';
import AutoModal from '@/components/AutoModal';
import { useState } from 'react';

const Index = () => {

  const [modelDetails, setModelDetails] = useState({})

  return (
    <div>
      <h3>Experience Levels List</h3>
      <div>
        <div className='d-flex justify-content-end'>
          <button type="button" className="btn btn-info text-white" data-bs-toggle="modal" data-bs-target="#ExperienceLevelsModal">Create Experience Level</button>
        </div>
        <AutoTable
          baseUri='/settings/picklists/experience-levels'
          columns={[
            {
              label: 'ID',
              key: 'id',
            },
            {
              label: 'Name',
              key: 'name',
            },
            {
              label: 'Priority',
              key: 'priority_number',
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
          tableId='ExperienceLevelsTable'
        />
      </div>
      {
        modelDetails && <><AutoModal id={`ExperienceLevelsModal`} modelDetails={modelDetails} actionUrl='/settings/picklists/experience-levels' /></>
      }
    </div>
  );
};

export default Index;