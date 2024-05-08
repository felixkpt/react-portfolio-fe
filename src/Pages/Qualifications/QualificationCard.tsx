import { baseURL } from "../../utils/helpers"

type Props = {
    item: any
}

const QualificationCard = ({ item }: Props) => {
    return (
        <li className="pf-card shadow-sm">
            <h3>{item.start_date} - {item.end_date}</h3>
            <div>
                <p className="desc">{item.institution} - {item.course}</p>
                <p className="qualification">{item.qualification}</p>
            </div>
            <div className="after"><img src={baseURL(`assets/${item.image || ''}`)} alt="" /></div>

        </li>
    )
}

export default QualificationCard