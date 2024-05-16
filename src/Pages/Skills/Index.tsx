import { Link } from "react-router-dom"
import useAxios from "@/hooks/useAxios"
import { useEffect } from "react"
import Loader from "@/components/Loader"
import usePermissions from "@/hooks/usePermissions"
import NoContentMessage from "@/components/NoContentMessage"
import SkillCategoryCard from "./SkillCategoryCard"
import ResumeDownloadForm from "../Home/ResumeDownloadForm"
import Header from "../../components/Header"

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
                            <Header title="Skills" />

                            {
                                data?.data ?
                                    data.data.map((item) => <SkillCategoryCard key={item.id} item={item} />)
                                    :
                                    <NoContentMessage />
                            }
                        </div>
                        :
                        <>
                            {

                                loading ? <Loader /> : <NoContentMessage message={errors} />
                            }
                        </>
                }
            </div>
            <ResumeDownloadForm />
        </div>
    )
}

export default Index