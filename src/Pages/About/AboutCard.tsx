import { baseURL } from "@/utils/helpers"

type Props = {
    item: any
}


const AboutCard = ({ item }: Props) => {

    return (
        <div>
            <div className="pf-grid pf-header cursor-default shadow bg-highlight p-1 rounded mb-4">
                <div className="pf-grid-item title_sect">
                    <h4 className="d-flex gap-2 justify-content-center justify-content-md-start">
                        {
                            <span>item.current_title</span>
                            &&
                            <span>{item.current_title}</span>
                        }
                        <span>{item.name}</span>
                    </h4>

                </div>
                <div className="pf-grid-item content_short_sect">
                    <h5 className="pf-slogan">{item.slogan}</h5>
                    <p className="pf-slogan">{item.introduction}</p>

                </div>
                <div className="pf-grid-item featured_image_sect d-lg-none">
                    <div className='pf-avatar pf-avatar-sm mx-auto'>
                        <img src={baseURL(`assets/${item?.image}`)} alt="" />
                    </div>
                </div>
            </div>
            <div className="pf-content" dangerouslySetInnerHTML={{ __html: item?.content }}></div>
        </div>
    )
}

export default AboutCard