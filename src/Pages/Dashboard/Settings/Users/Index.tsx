import AutoTable from '@/components/Autos/AutoTable'
import { useState } from 'react'
import AutoModal from '@/components/Autos/AutoModal'
import PageHeader from '@/components/PageHeader'
import useListSources from '@/hooks/apis/useListSources'

type Props = {}

const Index = (props: Props) => {

    const [modelDetails, setModelDetails] = useState({})

    const { rolePermissions: list_sources } = useListSources()

    return (

        <div>
            <PageHeader title={'Users List'} action="button" actionText="Create User" actionTargetId="CreateUserModal" permission='admin.settings.users' />
            <AutoTable
                baseUri='/dashboard/settings/users'
                columns={[
                    {
                        label: 'ID',
                        key: 'id',
                    },
                    {
                        label: 'User Name',
                        key: 'name',
                    },
                    {
                        label: 'Roles',
                        key: 'Roles',
                    },
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
                exclude={['created_at']}
                getModelDetails={setModelDetails}
                search={true}
            />

            {
                modelDetails && <><AutoModal id={`CreateUserModalModal`} modelDetails={modelDetails} actionUrl='/dashboard/settings/users' list_sources={list_sources} /></>
            }

        </div>
    )
}

export default Index