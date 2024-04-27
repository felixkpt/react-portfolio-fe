import AutoTable from '@/components/AutoTable';
import AutoModal from '@/components/AutoModal';
import { useState } from 'react';

const Index = () => {

  const [modelDetails, setModelDetails] = useState({})

  return (
    <div>
      <h3>SkillCategories List</h3>
      <div>
        <div className='d-flex justify-content-end'>
          <button type="button" className="btn btn-info text-white" data-bs-toggle="modal" data-bs-target="#SkillCategoriesModal">Create SkillCategory</button>
        </div>
        <AutoTable
          baseUri='/settings/picklists/skill-categories'
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
          tableId='defaultSkillCategoriesTable'
        />
      </div>
      {
        modelDetails && <><AutoModal id={`SkillCategoriesModal`} modelDetails={modelDetails} actionUrl='/settings/picklists/skill-categories' /></>
      }
    </div>
  );
};

export default Index;