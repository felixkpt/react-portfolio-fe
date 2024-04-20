import { Link } from "react-router-dom"
import useAxios from "../../hooks/useAxios"
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
                <Link className="btn btn-primary" to="/about/create-or-update">Create or update</Link>
            </div>
            <div>Home
                {
                    loading ? <Loader /> : 'Loaded'
                }
            </div>
        </div>
    )
}

export default Index