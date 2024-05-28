import { baseURL } from "../../../../utils/helpers"

type Props = {
    items: string[]
    slidesCounts: number
}

const Skills = ({ items, slidesCounts }: Props) => {
    return (
        <>
            <h5>Key skills</h5>
            <div className="row align-items-center mt-4">
                {
                    items.map((skill: any) =>
                    (
                        <div className={`col ${slidesCounts > 0 ? 'col-md-12' : ''} m-1 pf-skills`}>
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
    )
}

export default Skills