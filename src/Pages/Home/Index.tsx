import useAxios from "@/hooks/useAxios"
import { useEffect } from "react"
import AboutCard from "../About/AboutCard"
import NoContentMessage from "../../components/NoContentMessage"
import Loader from "../../components/Loader"
import AlertMessage from "../../components/AlertMessage"

const Index = () => {

    const { get: getAbout, loading: loadingAbout, loaded: loadedAbout, errors: errorsAbout, data: dataAbout } = useAxios()

    useEffect(() => {
        if (!dataAbout) {
            getAbout('/about/view/default')
        }
    }, [])

    return (
        <div className="">
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