import { Link } from "react-router-dom"
import useAxios from "../../hooks/useAxios"
import { useEffect } from "react"
import Loader from "../../components/Loader"
import usePermissions from "../../hooks/usePermissions"
import AlertMessage from "../../components/AlertMessage"
import NoContentMessage from "../../components/NoContentMessage"
import SkillCard from "./SkillCard"

const Index = () => {

    const { get, loading, loaded, errors, data } = useAxios()
    const { userCan } = usePermissions()

    useEffect(() => {
        get('skills')
    }, [])

    return (
        <div className="">
            {
                userCan('skills', 'post') &&
                <div className="d-flex justify-content-end">
                    <Link className="btn btn-primary" to="/skills/create">Create</Link>
                </div>
            }
            <div>
                {
                    loaded && !errors ?
                        <div className="pf-skills">
                            {
                                data?.data ?
                                    data.data.map((item) => <SkillCard item={item} />)
                                    :
                                    <NoContentMessage />
                            }
                        </div>
                        :
                        <>
                            {

                                loading ? <Loader /> : <AlertMessage message={errors} />
                            }
                        </>
                }
            </div>
        </div>
    )
}

export default Index