import useAxios from "../../hooks/useAxios"
import { useEffect } from "react"

const Index = () => {

    const { get } = useAxios()

    useEffect(() => {
        get('about').then((results) => {
            if (results) {
                console.log(results)
            }
        })
    }, [])
    return (
        <div className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, magni consequatur dolorem deserunt maxime eius eum, modi quos velit dolore, quisquam optio exercitationem consectetur mollitia quas accusantium nobis. Odio, et.
        </div>
    )
}

export default Index