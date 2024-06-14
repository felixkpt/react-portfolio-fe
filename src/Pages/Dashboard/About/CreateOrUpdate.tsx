import { useEffect, useState } from "react";
import Dropzone from "@/components/Dropzone"
import { publish } from "@/utils/events"
import SubmitButton from "@/components/SubmitButton";
import useAxios from "@/hooks/useAxios";
import Loader from "@/components/Loader";
import { useNavigate } from "react-router-dom";
import AlertMessage from "@/components/AlertMessage";
import useAutoPostDone from "@/hooks/autos/useAutoPostDone";
import { AboutType } from "@/interfaces/PortfolioInterfaces";

const CreateOrUpdate = () => {
    const navigate = useNavigate()
    const { event } = useAutoPostDone()
    useEffect(() => {
        if (event && event.status === 200 && event.id === 'aboutForm') {
            navigate('/dashboard/about')
        }
    }, [event])

    const [files, setFiles] = useState<(Blob | MediaSource)[]>([]);
    const { get, loading, loaded, errors } = useAxios()
    const [data, setData] = useState<AboutType | null>(null); // Initialize as null

    useEffect(() => {
        get('/dashboard/about').then((results: any) => {
            if (results) {
                setData(results.data);
            }
        });
    }, []);

    return (
        <div>
            {
                loaded && !errors ?
                    <form id="aboutForm" method='post' data-action={'/dashboard/about/create-or-update'} onSubmit={(e: any) => publish('autoPost', e, { image: files[0] })} className="flex justify-center">
                        <input type="hidden" name="id" defaultValue={data?.id || ''} /> {/* Default to empty string if data is null */}
                        <div className="form-group">
                            <label className="form-label">Current Title</label>
                            <input type="text" name="current_title" id="current_title" className="form-control" defaultValue={data?.current_title || ''} /> {/* Default to empty string if data is null */}
                        </div>
                        <div className="form-group">
                            <label className="form-label">My name</label>
                            <input type="text" name="name" id="name" className="form-control" defaultValue={data?.name || ''} /> {/* Default to empty string if data is null */}
                        </div>
                        <div className="form-group">
                            <label className="form-label">My slogan</label>
                            <input name="slogan" className="form-control" defaultValue={data?.slogan || ''} /> {/* Default to empty string if data is null */}
                        </div>
                        <div className="form-group">
                            <label className="form-label">Intro</label>
                            <textarea name="introduction" className="form-control" defaultValue={data?.introduction || ''}></textarea> {/* Default to empty string if data is null */}
                        </div>
                        <div className="form-group">
                            <label className="form-label">About Me</label>
                            <textarea name="content" className="form-control" defaultValue={data?.content || ''}></textarea> {/* Default to empty string if data is null */}
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
                                            <Dropzone fileType="jpg" files={files} setFiles={setFiles} maxFiles={1} />
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
                            loading ?
                                <Loader />
                                :
                                <AlertMessage message={errors} />
                        }
                    </div>
            }
        </div>
    )
}

export default CreateOrUpdate;
