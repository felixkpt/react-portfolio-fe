import { Icon } from "@iconify/react/dist/iconify.js"
import { baseURL } from "../../utils/helpers"
import { NavLink } from "react-router-dom"

type Props = {
    item: any
}

const ProjectCard = ({ item }: Props) => {
    return (
        <div className="col-md-12">
            <NavLink to={`/projects/view/${item.id}`} className='nav-link cursor-pointer'>
                <div className="shadow-sm rounded pf-card pf-projects-card row">
                    <div className="col-xl-2">
                        <img className="pf-projects-image" src={baseURL(`assets/${item.image || ''}`)} />
                    </div>
                    <div className="col-xl-10 pf-card-content">
                        <h5 className="col mb-4 d-flex justify-content-between">
                            <div className="d-flex gap-3 align-items-center">
                                <span>{item.title}</span>
                                <small className="text-white-50">@ {item.company.name}</small>
                            </div>
                            <div className="pf-card-view-item">
                                <Icon icon='carbon:list' />
                            </div>
                        </h5>
                        <div>{item.description_trimmed}</div>
                        <div>
                            <p>
                                {item.roles}
                            </p>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default ProjectCard