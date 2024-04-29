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
        getAbout('about')
    }, [])

    return (
        <div className="">

            <div className="d-flex justify-content-end">
                {
                    userCan('about/create-or-update', 'any') &&
                    <Link className="btn btn-primary" to="/about/create-or-update">Create or update</Link>
                }
            </div>
            <div>
                {
                    loadedAbout && !errorsAbout ?
                        <div className="pf-projects">
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