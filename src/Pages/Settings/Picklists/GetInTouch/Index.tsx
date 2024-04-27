import AutoTable from '@/components/AutoTable';
import AutoModal from '@/components/AutoModal';
import { useState } from 'react';

const Index = () => {

  const [modelDetails, setModelDetails] = useState({})

  return (
    <div>
      <h3>GetInTouch List</h3>
      <div>
        <div className='d-flex justify-content-end'>
          <button type="button" className="btn btn-info text-white" data-bs-toggle="modal" data-bs-target="#GetInTouchModal">Create GetInTouch</button>
        </div>
        <AutoTable
          baseUri='/settings/picklists/get-in-touch'
          columns={[
            {
              label: 'ID',
              key: 'id',
            },
            {
              key: 'type',
            },
            {
              label: 'Icon',
              key: 'Image',
            },
            {
              label: 'Link',
              key: 'link',
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
          tableId='defaultGetInTouchTable'
        />
      </div>
      {
        modelDetails && <><AutoModal id={`GetInTouchModal`} modelDetails={modelDetails} actionUrl='/settings/picklists/get-in-touch' /></>
      }
    </div>
  );
};

export default Index;