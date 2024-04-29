type Props = {
    item: any
}

const SkillCard = ({ item }: Props) => {
    return (
        <div className="container col-5">
            <div className="d-flex gap-2">
                <div className="col">{item.id}</div>
                <div className="col">{item.name}</div>
            </div>
        </div>
    )
}

export default SkillCard