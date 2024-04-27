import { useState } from "react";
import Dropzone from "../../components/Dropzone"
import { publish } from "../../utils/events"
import SubmitButton from "../../components/SubmitButton";

const CreateOrUpdate = () => {
    const [files, setFiles] = useState<string[]>([]);

    return (
        <div>
            <form method='post' data-action={'/companies'} onSubmit={(e: any) => publish('autoPost', e, { image: files[0] })} className="flex justify-center">
                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" id="name" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Website</label>
                    <input type="text" name="website" id="website" className="form-control" />
                </div>
                <div className="form-group">
                <label className="form-label">Roles</label>
                    <textarea className="form-control" name="roles"></textarea>
                </div>
                <div className="form-group">
                    <label className="form-label">Start date</label>
                    <input type="datetime" name="start_date" id="start_date" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">End date</label>
                    <input type="datetime" name="end_date" id="end_date" className="form-control" />
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
        </div>
    )
}

export default CreateOrUpdate