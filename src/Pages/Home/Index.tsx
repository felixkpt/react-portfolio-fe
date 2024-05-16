import useAxios from "@/hooks/useAxios"
import { useEffect } from "react"
import AboutCard from "../About/AboutCard"
import NoContentMessage from "../../components/NoContentMessage"
import Loader from "../../components/Loader"
import AlertMessage from "../../components/AlertMessage"
import ResumeDownloadForm from "./ResumeDownloadForm"
import Header from "../../components/Header"
import { config } from "../../utils/helpers"

const Index = () => {

    const { get: getAbout, loading: loadingAbout, loaded: loadedAbout, errors: errorsAbout, data: dataAbout } = useAxios()

    useEffect(() => {
        if (!dataAbout) {
            getAbout('/about/view/default')
        }
    }, [])

    return (
        <div className="">
            <Header title={`${config.name}`} hideTitle />
            <div>
                {
                    loadedAbout && !errorsAbout ?
                        <div className="pf-about row mt-3 justify-content-between">
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
            <ResumeDownloadForm />
        </div>
    )
}

export default Index