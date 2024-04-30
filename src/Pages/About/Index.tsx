import { Link } from "react-router-dom"
import useAxios from "@/hooks/useAxios"
import { useEffect } from "react"
import Loader from "@/components/Loader"
import usePermissions from "@/hooks/usePermissions"
import AlertMessage from "@/components/AlertMessage"
import NoContentMessage from "@/components/NoContentMessage"
import AboutCard from "./AboutCard"

const Index = () => {

    const { get: getAbout, loading: loadingAbout, loaded: loadedAbout, errors: errorsAbout, data: dataAbout } = useAxios()
    const { userCan } = usePermissions()

    useEffect(() => {
        if (!dataAbout) {
            getAbout('/about/view/default')
        }
    }, [])

    return (
        <div className="">

            <div className="d-flex justify-content-end">
                {
                    userCan('dashboard/about/create-or-update', 'any') &&
                    <Link className="btn btn-primary" to="/dashboard/about/create-or-update">Create or update</Link>
                }
            </div>
            <div>
                {
                    loadedAbout && !errorsAbout ?
                        <div className="pf-about">
                            {
                                dataAbout?.data
                                    ?
                                    <AboutCard item={dataAbout.data} />
                                    :
                                    <NoContentMessage />
                            }
                        </div>
                        :
                        <>
                            {

                                loadingAbout ? <Loader /> : <AlertMessage message={errorsAbout} />
                            }
                        </>
                }
            </div>
        </div>
    )
}

export default Index