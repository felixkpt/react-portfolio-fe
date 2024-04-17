import { Link } from "react-router-dom"
import useAxios from "../../hooksnew/useAxios"
import { useEffect } from "react"
import Loader from "../../components/Loader"

const Index = () => {

    const { get, loading } = useAxios()

    useEffect(() => {
        get('about').then((results) => {
            if (results) {
                console.log(results)
            }
        })
    }, [])
    return (
        <div className="">

            <div className="d-flex justify-content-end">
                <Link className="btn btn-primary" to="/about/update-or-create">Update /create</Link>
            </div>
            <div>About
                {
                    loading ? <Loader /> : 'Loaded'
                }
            </div>
        </div>
    )
}

export default Index