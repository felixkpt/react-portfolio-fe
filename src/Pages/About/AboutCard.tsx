import { baseURL } from "@/utils/helpers"

type Props = {
    item: any
}

const AboutCard = ({ item }: Props) => {
    return (
        <div>
            <h4 className="pf-header d-flex gap-1">
                <div className='pf-avatar pf-avatar-sm d-lg-none'>
                    <img src={baseURL(`assets/${item?.image}`)} alt="" />
                </div>
                {
                    item.current_title
                    &&
                    <span>{item.current_title}</span>
                }
                <span>{item.name}</span>
            </h4>
            <div className="pf-slogan" dangerouslySetInnerHTML={{ __html: item?.slogan }}></div>
            <div className="pf-content" dangerouslySetInnerHTML={{ __html: item?.content }}></div>
        </div>
    )
}

export default AboutCard