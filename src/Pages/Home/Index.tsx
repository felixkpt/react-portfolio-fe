import AboutCard from "../About/AboutCard"
import NoContentMessage from "../../components/NoContentMessage"
import Loader from "../../components/Loader"
import AlertMessage from "../../components/AlertMessage"
import ResumeDownloadForm from "./ResumeDownloadForm"
import Header from "../../components/Header"
import { config } from "../../utils/helpers"
import { useAboutContext } from "../../contexts/AboutContext"

const Index = () => {

    const { data, loading, loaded, errors } = useAboutContext()

    return (
        <div className="">
            <Header title={`${config.name}`} hideTitle />
            <div>
                {
                    loaded && !errors ?
                        <div className="pf-about row mt-3 justify-content-between">
                            {
                                data
                                    ?
                                    <AboutCard item={data} />
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
            <ResumeDownloadForm />
        </div>
    )
}

export default Index