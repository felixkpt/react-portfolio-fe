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
          <button type="button" className="btn btn-info text-white" data-bs-toggle="modal" data-bs-target="#ExperienceLevels">Create Experience Level</button>
        </div>
        <AutoTable
          baseUri='/admin/settings/picklists/experience-levels'
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
          tableId='ExperienceLevelsTable'
        />
      </div>
      {
        modelDetails && <><AutoModal id={`ExperienceLevels`} modelDetails={modelDetails} actionUrl='/admin/settings/picklists/experience-levels' /></>
      }
    </div>
  );
};

export default Index;