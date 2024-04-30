import { Link } from "react-router-dom"
import useAxios from "@/hooks/useAxios"
import { useEffect } from "react"
import Loader from "@/components/Loader"
import usePermissions from "@/hooks/usePermissions"
import AlertMessage from "@/components/AlertMessage"
import NoContentMessage from "@/components/NoContentMessage"
import SkillCategoryCard from "./SkillCategoryCard"

const Index = () => {

    const { get, loading, loaded, errors, data } = useAxios()
    const { userCan } = usePermissions()

    useEffect(() => {
        get('/dashboard/settings/picklists/skill-categories')
    }, [])

    return (
        <div className="">
            {
                userCan('dashboard/skills', 'post') &&
                <div className="d-flex justify-content-end">
                    <Link className="btn btn-primary" to="/dashboard/skills">Create</Link>
                </div>
            }
            <div>
                {
                    loaded && !errors ?
                        <div className="pf-skills row mt-3 justify-content-between">
                            {
                                data?.data ?
                                    data.data.map((item) => <SkillCategoryCard item={item} />)
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