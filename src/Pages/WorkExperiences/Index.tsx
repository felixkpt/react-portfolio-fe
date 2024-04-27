import useAxios from "../../hooks/useAxios"
import { useEffect } from "react"
import Loader from "../../components/Loader"
import AlertMessage from "../../components/AlertMessage"
import NoContentMessage from "../../components/NoContentMessage"
import WorkExperienceCard from "./WorkExperienceCard"

const Index = () => {

    const { get, loading, loaded, errors, data } = useAxios()

    useEffect(() => {
        get('companies')
    }, [])

    return (
        <div className="">
            <div>
                {
                    loaded && !errors ?
                        <div className="pf-companies">
                            {
                                data?.data && data?.data.length ?
                                    data.data.map((item) => <WorkExperienceCard item={item} />)
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