import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useAxios from "../../../hooks/useAxios"
import NoContentMessage from "../../../components/NoContentMessage"
import Loader from "../../../components/Loader"
import AlertMessage from "../../../components/AlertMessage"
import ProjectCard from "./ProjectCard"

const Index = () => {

    const location = useParams()
    const { id } = location
    const { data, get, loading, loaded, errors } = useAxios()

    useEffect(() => {

        if (!data && id) {
            get(`/projects/view/${id}`)
        }
    }, [id])

    return (
        <div>
            {
                loaded && !errors ?
                    <div className="pf-projects row mt-3 justify-content-between">
                        {
                            data.data ?
                                <ProjectCard item={data.data} />
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
    )
}

export default Index