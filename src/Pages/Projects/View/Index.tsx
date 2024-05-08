import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import useAxios from "../../../hooks/useAxios"
import NoContentMessage from "../../../components/NoContentMessage"
import Loader from "../../../components/Loader"
import ProjectCard from "./ProjectCard"
import ResumeDownloadForm from "../../Home/ResumeDownloadForm"
import { Icon } from "@iconify/react/dist/iconify.js"
import { baseURL } from "../../../utils/helpers"

const Index = () => {

    const location = useParams()
    const { id } = location
    const { data, get, loading, loaded, errors } = useAxios()
    const { data: dataProjects, get: getProjects } = useAxios()
    const [filteredProjects, setFilteredProjects] = useState([])

    useEffect(() => {

        if (id) {
            get(`/projects/view/${id}`)
        }
    }, [id])

    useEffect(() => {
        if (!dataProjects) {
            getProjects('projects')
        }

    }, [])

    useEffect(() => {
        if (dataProjects?.data && dataProjects.data.length) {
            // Filter out projects whose id is not the current id and limit projects to 4
            const filtered = dataProjects.data.filter(project => project.id != id)
                .slice(0, 4);
            setFilteredProjects(filtered);
        }
    }, [dataProjects, id]);

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

                            loading ? <Loader /> : <NoContentMessage message={errors} />
                        }
                    </>
            }

            {
                filteredProjects.length > 0 ?
                    <div className="container-lg mx-auto mt-5">
                        <hr className="mt-5" />
                        <div className="pf-projects row mt-3 justify-content-center">
                            <h6 className="mb-3">More Projects</h6>
                            {
                                filteredProjects.map((item) => {
                                    return (
                                        <div className="col-md-6 col-lg-3 p-2 h-auto" key={item.id}>
                                            <div className="shadow-sm rounded h-100 pf-projects-card row gap-2 gap-md-0 pf-card">

                                                <NavLink to={`/projects/view/${item.id}`} className='nav-link'>
                                                    <div className="pf-card">
                                                        <div className="card-header">
                                                            <div className="pf-card-content">
                                                                <div className="d-flex justify-content-between gap-1 mb-1">
                                                                    {item.title}
                                                                    <div className="pf-card-view-item">
                                                                        <Icon icon='ph:arrow-right-bold' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="text-center text-md-start">
                                                                <img className="pf-projects-image thumb" src={baseURL(`assets/${item.image || ''}`)} />
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            {item.description_trimmed2}
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    :
                    null
            }
            <ResumeDownloadForm />
        </div>
    )
}

export default Index