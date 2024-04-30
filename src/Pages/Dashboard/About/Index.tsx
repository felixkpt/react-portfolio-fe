import AutoTable from '@/components/Autos/AutoTable';
import AutoModal from '@/components/Autos/AutoModal';
import { useState } from 'react';
import Str from '@/utils/Str';

const Index = () => {
    // begin component common config
    const pluralName = 'About'
    const singularName = 'About'
    const uri = '/dashboard/about'
    const componentId = Str.slug(pluralName)
    const [modelDetails, setModelDetails] = useState({})
    const search = true


    const columns = [
        {
            label: 'ID',
            key: 'id',
        },
        {
            key: 'current_title',
        },
        {
            label: 'Name',
            key: 'name',
        },
        {
            key: 'slogan',
        },
        {
            key: 'introduction',
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

    return (
        <div>
            <h3>{pluralName} List</h3>
            <div>
                <div className='d-flex justify-content-end'>
                    <button type="button" className="btn btn-info text-white" data-bs-toggle="modal" data-bs-target={`#${componentId}Modal`}>Create {singularName}</button>
                </div>
                <AutoTable
                    baseUri={uri}
                    columns={columns}
                    getModelDetails={setModelDetails}
                    search={search}
                    tableId={`${componentId}Table`}
                />
            </div>
            {
                modelDetails && <><AutoModal id={`${componentId}Modal`} modelDetails={modelDetails} actionUrl={`${uri}/create-or-update`} /></>
            }
        </div>
    );
};

export default Index;