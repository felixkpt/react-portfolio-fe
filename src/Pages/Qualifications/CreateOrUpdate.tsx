import { useEffect, useState } from "react";
import Dropzone from "@/components/Dropzone";
import { publish } from "@/utils/events";
import SubmitButton from "@/components/SubmitButton";
import { useNavigate } from "react-router-dom";
import useAutoPostDone from "@/hooks/autos/useAutoPostDone";

const CreateOrUpdate = () => {
    const navigate = useNavigate();
    const { event } = useAutoPostDone();

    useEffect(() => {
        if (event && event.status === 200 && event.id === 'qualificationsForm') {
            navigate('/qualifications');
        }
    }, [event, navigate]);

    const [files, setFiles] = useState<Blob[]>([]); // Adjusted to use Blob instead of string for files

    return (
        <div>
            <form method='post' id="qualificationsForm" data-action={'/qualifications'} onSubmit={(e: any) => publish('autoPost', e, { image: files[0] })} className="flex justify-center">
                <div className="form-group">
                    <label className="form-label">Institution</label>
                    <input type="text" name="institution" id="institution" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Course</label>
                    <input type="text" name="course" id="course" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Qualification</label>
                    <input type="text" name="qualification" id="qualification" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Start date</label>
                    <input type="datetime-local" name="start_date" id="start_date" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">End date</label>
                    <input type="datetime-local" name="end_date" id="end_date" className="form-control" />
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
                    <SubmitButton className="btn btn-warning">Save</SubmitButton>
                </div>
            </form>
        </div>
    );
};

export default CreateOrUpdate;
