import FormatDate from "@/utils/FormatDate"
import { Icon } from "@iconify/react/dist/iconify.js"
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
                        <img className="pf-projects-image" src={`${item.image || ''}`} />
                    </div>
                    <div className="col-xl-10 pf-card-content">
                        <h5 className="col mb-4 d-flex justify-content-between">
                            <div className="d-flex gap-3 align-items-center">
                                <span>{item.title}</span>
                                <small className="text-white-50">@ {item.company.name}</small>
                            </div>
                            <div className="pf-card-view-item">
                                <Icon icon='ph:arrow-right-bold' />
                            </div>
                        </h5>
                        <div className="col-xl-2">
                            <h6><span>{FormatDate.MMYY(item.start_date)}</span>
                                <span className="mx-1">—</span>
                                <span>{item.end_date ? FormatDate.MMYY(item.end_date) : 'Present'}</span></h6>
                        </div>
                        <div className="border-bottom border-light border-opacity-25 my-4"></div>

                        <div dangerouslySetInnerHTML={{ __html: (item.description) }}></div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default ProjectCard