import { useAboutContext } from "../../../contexts/AboutContext"

const SideNavAbout = () => {
    const { data } = useAboutContext()
    return (
        <>
            {
                data &&
                <>
                    <div className='pf-avatar pf-avatar-sm'>
                        <img src={data?.image} alt="" />
                    </div>
                    <span>{data.name}</span>
                    <div className='my-3 border-light border-top-0 border-opacity-50'></div>
                </>
            }
        </>
    )
}

export default SideNavAbout