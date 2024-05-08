import { Icon } from "@iconify/react/dist/iconify.js"
import { baseURL } from "@/utils/helpers"

type Props = {
    item: any
}


const ProjectCard = ({ item }: Props) => {
    return (
        <div className="col-md-12 cursor-default">
            <div className="shadow-sm rounded pf-projects-card row gap-2 gap-md-0 pf-card">
                <div className="col-md-3 col-xl-2 text-center text-md-start">
                    <img className="pf-projects-image" src={baseURL(`assets/${item.image || ''}`)} />
                </div>
                <div className="col-md-9 col-xl-10 pf-card-content">
                    <h5 className="col mb-4 d-flex justify-content-between">
                        <div className="d-flex gap-3 align-items-center">
                            <span>{item.title}</span>
                            <small className="text-white-50">@ {item.company.name}</small>
                        </div>
                        {
                            item.project_url &&
                            <div className="pf-card-view-item">
                                <a href={`${item.project_url}`} className="nav-link"><Icon icon='quill:link-out' /></a>
                            </div>
                        }
                    </h5>
                    <div className="border-bottom border-light border-opacity-25 my-4"></div>
                </div>
            </div>
            <div className="row">
                <div>{item.description_trimmed}</div>
                <div className="mt-4">
                    {
                        item.skills.length ?
                            <>
                                <h5>Key skills</h5>
                                <div className="flex flex-wrap align-items-center">
                                    {
                                        item.skills.map((skill: any) =>
                                        (
                                            <div className="col btn btn-outline-success m-1 pf-skills">
                                                <div className="text-nowrap text-truncate d-flex align-items-center gap-1">
                                                    <div><img className="pf-skill-image" src={baseURL(`assets/${skill.image || ''}`)} /></div>
                                                    <span>{skill.name}</span>
                                                </div>
                                            </div>
                                        )
                                        )
                                    }
                                </div>
                            </>
                            :
                            <></>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard