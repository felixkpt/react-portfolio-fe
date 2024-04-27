import { Link, useNavigate } from "react-router-dom"
import useAxios from "../../hooks/useAxios"
import { useEffect } from "react"
import Loader from "../../components/Loader"
import usePermissions from "../../hooks/usePermissions"
import AlertMessage from "../../components/AlertMessage"
import NoContentMessage from "../../components/NoContentMessage"
import ContactMeCard from "./ContactMeCard"
import SubmitButton from "../../components/SubmitButton"
import { publish } from "../../utils/events"
import useAutoPostDone from "../../hooks/useAutoPostDone"

const Index = () => {

    const { get, loading, loaded, errors, data } = useAxios()
    const { userCan } = usePermissions()
    const { event } = useAutoPostDone()

    const navigate = useNavigate()

    useEffect(() => {
        if (!data) {
            get('settings/picklists/get-in-touch')
        }

        if (event?.elementId == 'contact-me-form') {
            navigate('/')
        }

    }, [event])

    return (
        <div className="">
            {
                userCan('settings.picklists.get-in-touch', 'post') &&
                <div className="d-flex justify-content-end">
                    <Link className="btn btn-primary" to="/settings/picklists/get-in-touch">Create</Link>
                </div>
            }
            <div>
                {
                    loaded && !errors ?
                        <div className="pf-contact-me">
                            {
                                data?.data && data?.data.length ?
                                    data.data.map((item) => <ContactMeCard item={item} />)
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
                <div className="pf-contact-me-form m-5">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <form id="contact-me-form" data-action="/contact-me" onSubmit={(e) => publish('autoPost', e)}>
                                <div className="form-group">
                                    <label className="form-label">Your name</label>
                                    <input type="text" name="name" id="name" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Your email</label>
                                    <input type="text" name="email" id="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Message</label>
                                    <textarea className="form-control" name="message"></textarea>
                                </div>
                                <SubmitButton />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index