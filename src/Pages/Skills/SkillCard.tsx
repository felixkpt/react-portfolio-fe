type Props = {
    item: any
}

const SkillCard = ({ item }: Props) => {
    return (
        <div className="container col-md-10 cursor-default">
            <div className="d-flex">
                <div className="col mb-2 d-flex gap-3">
                    <img className="pf-skill-image" src={`${item.image || ''}`} />
                    <span>{item.name}</span>
                </div>
            </div>
        </div>
    )
}

export default SkillCard