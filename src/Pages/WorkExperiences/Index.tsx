import { Link } from "react-router-dom"
import useAxios from "../../hooks/useAxios"
import { useEffect } from "react"
import Loader from "../../components/Loader"
import usePermissions from "../../hooks/usePermissions"

const Index = () => {

    const { get, loading } = useAxios()
    const { userCan } = usePermissions()

    useEffect(() => {
        get('work-experiences').then((results) => {
            if (results) {
                console.log(results)
            }
        })
    }, [])
    return (
        <div className="">

            {
                userCan('work-experiences', 'post') &&
                <div className="d-flex justify-content-end">
                    <Link className="btn btn-primary" to="/work-experiences/create">Create</Link>
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