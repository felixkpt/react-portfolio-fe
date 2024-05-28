import { Icon } from "@iconify/react/dist/iconify.js"
import { baseURL } from "@/utils/helpers"
import Header from "../../../components/Header"
import Slides from "./Includes/Slides"
import Skills from "./Includes/Skills"

type Props = {
    item: any
}

const ProjectCard = ({ item }: Props) => {
    return (
        <div className="col-md-12 cursor-default">
            <Header title={`${item.title} @ ${item.company.name}`} hideTitle description={item.company.name} />
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
            </div>
            <div className="row">
                {
                    item.slides.length ?
                        <div className="col-12 col-md-8 col-xl-9 mt-4 mb-5 mb-md-0">
                            <Slides items={item.slides} />
                        </div>
                        : null
                }
                {
                    item.skills.length ?
                        <div className={`mt-4 col-12 ${item.slides.length > 0 ? ' col-md-4 col-xl-3' : ''}`}>
                            <Skills items={item.skills} slidesCounts={item.slides.length} />
                        </div>
                        : null
                }
            </div>
        </div>
    )
}

export default ProjectCard