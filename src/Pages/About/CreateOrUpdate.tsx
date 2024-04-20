import { useState } from "react";
import Dropzone from "../../components/Dropzone"
import { publish } from "../../utils/events"

const CreateOrUpdate = () => {
    const [files, setFiles] = useState<string[]>([]);

    return (
        <div>
            <form method='post' action-url={'/about/create-or-update'} onSubmit={(e: any) => publish('ajaxPost', e, { image: files[0] })} className="flex justify-center">
                <div className="form-group">
                    <label className="form-label">Current Title</label>
                    <input type="text" name="current_title" id="current_title" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">My name</label>
                    <input type="text" name="name" id="name" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">My slogan</label>
                    <textarea className="form-control" name="slogan"></textarea>
                </div>
                <div className="form-group">
                    <label className="form-label">About Me</label>
                    <textarea className="form-control" name="content"></textarea>
                    <div className="mt-2 d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
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
            </form>
        </div>
    )
}

export default CreateOrUpdate