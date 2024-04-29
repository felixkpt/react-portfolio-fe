import { Link } from "react-router-dom"
import useAxios from "@/hooks/useAxios"
import { useEffect } from "react"
import Loader from "@/components/Loader"
import usePermissions from "@/hooks/usePermissions"
import AlertMessage from "@/components/AlertMessage"
import NoContentMessage from "@/components/NoContentMessage"
import QualificationCard from "./QualificationCard"

const Index = () => {

    const { get, loading, loaded, errors, data } = useAxios()
    const { userCan } = usePermissions()

    useEffect(() => {
        get('qualifications')
    }, [])

    return (
        <div className="">
            {
                userCan('qualifications', 'post') &&
                <div className="d-flex justify-content-end">
                    <Link className="btn btn-primary" to="/qualifications/create">Create</Link>
                </div>
            }
            <div>
                {
                    loaded && !errors ?
                        <div className="pf-qualifications">
                            {
                                data?.data && data?.data.length ?
                                    data.data.map((item) => <QualificationCard item={item} />)
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