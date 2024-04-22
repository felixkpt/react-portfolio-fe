import { Link } from "react-router-dom"
import useAxios from "../../hooks/useAxios"
import { useEffect, useState } from "react"
import Loader from "../../components/Loader"
import usePermissions from "../../hooks/usePermissions"

const Index = () => {

    const { get, loading } = useAxios()
    const [data, setData] = useState(undefined)
    const { userCan } = usePermissions()

    useEffect(() => {
        get('about').then((results: any) => {
            if (results) {
                setData(results.data)
            }
        })
    }, [])

    return (
        <div className="">

            <div className="d-flex justify-content-end">
                {
                    userCan('about/create-or-update', 'any') &&
                    <Link className="btn btn-primary" to="/about/create-or-update">Create or update</Link>
                }
            </div>
            <div>About
                {
                    !loading && data ?
                        <div>
                            <h4 className="pf-header d-flex gap-1">
                                {
                                    data.current_title
                                    &&
                                    <span>{data.current_title}</span>
                                }
                                <span>{data.name}</span>
                            </h4>
                            <div className="pf-slogan" dangerouslySetInnerHTML={{ __html: data?.slogan }}></div>
                            <div className="pf-content" dangerouslySetInnerHTML={{ __html: data?.content }}></div>
                        </div>
                        :
                        <Loader />
                }
            </div>
        </div>
    )
}

export default Index