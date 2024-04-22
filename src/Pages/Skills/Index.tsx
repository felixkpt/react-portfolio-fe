import { Link } from "react-router-dom"
import useAxios from "../../hooks/useAxios"
import { useEffect } from "react"
import Loader from "../../components/Loader"
import usePermissions from "../../hooks/usePermissions"

const Index = () => {

    const { get, loading } = useAxios()
    const { userCan } = usePermissions()

    useEffect(() => {
        get('skills').then((results) => {
            if (results) {
                console.log(results)
            }
        })
    }, [])
    return (
        <div className="">

            {
                userCan('skills', 'post') &&
                <div className="d-flex justify-content-end">
                    <Link className="btn btn-primary" to="/skills/create">Create</Link>
                </div>
            }
            <div>Skills
                {
                    loading ? <Loader /> : 'Loaded'
                }
            </div>
        </div>
    )
}

export default Index