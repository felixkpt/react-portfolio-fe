import { Link } from "react-router-dom"
import useAxios from "../../hooks/useAxios"
import { useEffect } from "react"
import Loader from "../../components/Loader"
import usePermissions from "../../hooks/usePermissions"
import AlertMessage from "../../components/AlertMessage"
import CompanyCard from "./CompanyCard"
import NoContentMessage from "../../components/NoContentMessage"

const Index = () => {

    const { get, loading, loaded, errors, data } = useAxios()
    const { userCan } = usePermissions()

    useEffect(() => {
        get('companies')
    }, [])

    return (
        <div className="">
            {
                userCan('companies', 'post') &&
                <div className="d-flex justify-content-end">
                    <Link className="btn btn-primary" to="/companies/create">Create</Link>
                </div>
            }
            <div>
                {
                    loaded && !errors ?
                        <div className="pf-companies">
                            {
                                data?.data && data?.data.length ?
                                    data.data.map((item) => <CompanyCard item={item} />)
                                    :
                                    <NoContentMessage />
                            }
                        </div>
                        :
                        <>
                            {

                                loading ? <Loader /> : <AlertMessage message={errors} />
                            }
                        </>
                }
            </div>
        </div>
    )
}

export default Index