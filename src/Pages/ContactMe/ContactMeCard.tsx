import { baseURL } from "../../utils/helpers"

type Props = {
    item: any
}

const ContactMeCard = ({ item }: Props) => {
    return (
        <div className="d-flex gap-2 pf-card cursor-default">
            <div className="d-flex gap-2">
                <img className="pf-contact-image" src={baseURL(`assets/${item.image || ''}`)} />
                <div>{item.name}:</div>
            </div>
            <div>{item.link}</div>
        </div>
    )
}

export default ContactMeCard