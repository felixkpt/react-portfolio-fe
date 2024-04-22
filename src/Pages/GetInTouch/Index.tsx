import { Link } from "react-router-dom"
import useAxios from "../../hooks/useAxios"
import { useEffect } from "react"
import Loader from "../../components/Loader"
import usePermissions from "../../hooks/usePermissions"

const Index = () => {

    const { get, loading } = useAxios()
    const { userCan } = usePermissions()

    useEffect(() => {
        get('get-in-touch').then((results) => {
            if (results) {
                console.log(results)
            }
        })
    }, [])
    return (
        <div className="">
            {
                userCan('get-in-touch', 'post') &&
                <div className="d-flex justify-content-end">
                    <Link className="btn btn-primary" to="/get-in-touch/create">Create</Link>
                </div>
            }
            <div>KeepInTouch
                {
                    loading ? <Loader /> : 'Loaded'
                }
            </div>
        </div>
    )
}

export default Index