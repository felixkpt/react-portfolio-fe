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
    const { get, loading, loaded, errors } = useAxios()
    const { get: getProjects, loaded: loadedProjects } = useAxios()

    const [data, setData] = useState(null);
    const [projectsList, setProjectsList] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([])

    useEffect(() => {

        if (id) {
            get(`/projects/view/${id}`).then((resp) => {
                if (resp) {
                    setData(resp.results.data)
                }
            })
        }
    }, [id])

    useEffect(() => {
        if (!loadedProjects) {
            getProjects('projects').then((resp) => {
                if (resp) {
                    setProjectsList(resp.results.data)
                }
            })
        }

    }, [])

    useEffect(() => {
        if (projectsList.length > 0) {
            // Filter out projects whose id is not the current id and limit projects to 4
            const filtered = projectsList.filter(project => project.id != id)
                .slice(0, 4);
            setFilteredProjects(filtered);
        }
    }, [projectsList, id]);

    return (
        <div>
            {
                loaded && !errors ?
                    <div className="pf-projects row mt-5 justify-content-between">
                        {
                            data ?
                                <ProjectCard item={data} />
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
                    <div className="container-fluid p-0 mx-auto mt-5">
                        <hr className="mt-5" />
                        <div className="pf-projects row mt-3 justify-content-center">
                            <h6 className="mb-3">More Projects</h6>
                            {
                                filteredProjects.map((item) => {
                                    return (
                                        <div className="col-md-6 col-xl-4 p-2 h-auto" key={item.id}>
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