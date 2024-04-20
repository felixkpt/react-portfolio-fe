import { Link } from "react-router-dom"
import useAxios from "../../hooks/useAxios"
import { useEffect } from "react"
import Loader from "../../components/Loader"

const Index = () => {

    const { get, loading } = useAxios()

    useEffect(() => {
        get('projects').then((results) => {
            if (results) {
                console.log(results)
            }
        })
    }, [])
    return (
        <div className="">

            <div className="d-flex justify-content-end">
                <Link className="btn btn-primary" to="/projects/create-or-update">Create or update</Link>
            </div>
            <div>Projects
                {
                    loading ? <Loader /> : 'Loaded'
                }
            </div>
        </div>
    )
}

export default Index