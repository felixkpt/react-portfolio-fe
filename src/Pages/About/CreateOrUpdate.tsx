import { useEffect, useState } from "react";
import Dropzone from "../../components/Dropzone"
import { publish, subscribe, unsubscribe } from "../../utils/events"
import SubmitButton from "../../components/SubmitButton";
import useAxios from "../../hooks/useAxios";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

const CreateOrUpdate = () => {
    const [files, setFiles] = useState<string[]>([]);
    const { get, loading, fetched } = useAxios()
    const [data, setData] = useState(undefined)
    const navigate = useNavigate()


    useEffect(() => {
        get('about').then((results: any) => {
            if (results) {
                setData(results.data)
            }
        })
    }, [])

    // attach listener for create update then redirect to about page
    useEffect(() => {

        subscribe('ajaxPostDone', handleAjaxPostDone)

        return () => unsubscribe('ajaxPostDone', handleAjaxPostDone)
    }, [])

    const handleAjaxPostDone = (event: any) => {
        if (event?.detail) {
            const { elementId, results } = event.detail;
            if (elementId === 'aboutForm' && results) {
                navigate('/about');
            }
        }
    };

    return (
        <div>
            {
                fetched ?
                    <form id="aboutForm" method='post' action-url={'/about/create-or-update'} onSubmit={(e: any) => publish('ajaxPost', e, { image: files[0] })} className="flex justify-center">
                        <input type="hidden" name="id" defaultValue={data && data.id} />
                        <div className="form-group">
                            <label className="form-label">Current Title</label>
                            <input type="text" name="current_title" id="current_title" className="form-control" defaultValue={data && data?.current_title} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">My name</label>
                            <input type="text" name="name" id="name" className="form-control" defaultValue={data && data?.name} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">My slogan</label>
                            <textarea name="slogan" className="form-control" defaultValue={data && data?.slogan}></textarea>
                        </div>
                        <div className="form-group">
                            <label className="form-label">About Me</label>
                            <textarea name="content" className="form-control" defaultValue={data && data?.content}></textarea>
                        </div>
                        <div className="accordion-item mb-2">
                            <h2 className="accordion-header" id="heading4">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                    Featured Image
                                </button>
                            </h2>
                            <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#postEditorAccordion">
                                <div className="accordion-body">
                                    <div className="form-group mb-4 inside-accordion">
                                        <div className='form-control' id='image'>
                                            <Dropzone fileType="jpg" files={files} setFiles={setFiles} fileType='featured image' maxFiles={1} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 d-flex justify-content-end">
                            <SubmitButton />
                        </div>
                    </form>
                    :
                    <div>
                        {
                            loading &&
                            <Loader />
                        }
                    </div>
            }

        </div>
    )
}

export default CreateOrUpdate