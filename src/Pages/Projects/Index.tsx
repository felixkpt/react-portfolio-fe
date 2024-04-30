import { Link } from "react-router-dom"
import useAxios from "@/hooks/useAxios"
import { useEffect } from "react"
import Loader from "@/components/Loader"
import usePermissions from "@/hooks/usePermissions"
import AlertMessage from "@/components/AlertMessage"
import NoContentMessage from "@/components/NoContentMessage"
import ProjectsCard from "./ProjectCard"

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
                            {
                                data?.data && data?.data.length ?
                                    data.data.map((item) => <ProjectsCard item={item} />)
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