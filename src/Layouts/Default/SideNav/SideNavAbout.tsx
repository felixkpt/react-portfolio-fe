import { useAboutContext } from "../../../contexts/AboutContext"
import { baseURL } from "../../../utils/helpers"

const SideNavAbout = () => {
    const { data } = useAboutContext()
    return (
        <div>
            {
                data &&
                <>
                    <div className='pf-avatar pf-avatar-sm'>
                        <img src={baseURL(`assets/${data?.image}`)} alt="" />
                    </div>
                    <span>{data.name}</span>
                    <div className='my-3 border-light border-top-0 border-opacity-50'></div>
                </>
            }
        </div>
    )
}

export default SideNavAbout