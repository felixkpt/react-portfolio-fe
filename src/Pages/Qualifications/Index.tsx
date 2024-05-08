import './qualifications.scss'
import { Link } from "react-router-dom"
import useAxios from "@/hooks/useAxios"
import { useEffect } from "react"
import Loader from "@/components/Loader"
import usePermissions from "@/hooks/usePermissions"
import NoContentMessage from "@/components/NoContentMessage"
import QualificationCard from "./QualificationCard"
import ResumeDownloadForm from '../Home/ResumeDownloadForm'

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
                        <div className="pf-qualifications row mt-3 justify-content-between">
                            <h4 className="mb-3">Qualifications</h4>
                            {
                                data?.data && data?.data.length ?
                                    <ul className="timeline">
                                        {data.data.map((item) => <QualificationCard key={item.id} item={item} />)}
                                    </ul>
                                    :
                                    <NoContentMessage />
                            }
                        </div>
                        :
                        <>
                            {

                                loading ? <Loader /> : <NoContentMessage message={errors} />
                            }
                        </>
                }
            </div>
            <ResumeDownloadForm />
        </div>
    )
}

export default Index