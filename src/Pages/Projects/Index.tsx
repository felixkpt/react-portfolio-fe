import { Link } from "react-router-dom"
import useAxios from "@/hooks/useAxios"
import { useEffect } from "react"
import Loader from "@/components/Loader"
import usePermissions from "@/hooks/usePermissions"
import NoContentMessage from "@/components/NoContentMessage"
import ProjectsCard from "./ProjectCard"
import ResumeDownloadForm from "../Home/ResumeDownloadForm"

const Index = () => {

    const { get, loading, loaded, errors, data } = useAxios()
    const { userCan } = usePermissions()

    useEffect(() => {
        get('projects')
    }, [])

    return (
        <div className="">
            {
                userCan('projects', 'post') &&
                <div className="d-flex justify-content-end">
                    <Link className="btn btn-primary" to="/projects/create">Create</Link>
                </div>
            }
            <div>
                {
                    loaded && !errors ?
                        <div className="pf-projects row mt-3 justify-content-between">
                            <h4 className="mb-3">Projects</h4>
                            {
                                data?.data && data?.data.length ?
                                    data.data.map((item) => <ProjectsCard key={item.id} item={item} />)
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