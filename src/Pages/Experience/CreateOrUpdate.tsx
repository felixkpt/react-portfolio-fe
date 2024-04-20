import SubmitButton from "../../components/SubmitButton"
import { publish } from "../../utils/events"

const CreateOrUpdate = () => {

    return (
        <div>
            <form method='post' action-url={'/experiences/create-or-update'} onSubmit={(e: any) => publish('ajaxPost', e)} className="flex justify-center">
                <div className="form-group">
                    <label className="form-label">Type</label>
                    <input type="text" name="type" id="type" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Link</label>
                    <input type="text" name="link" id="link" className="form-control" />
                </div>
                <SubmitButton />
            </form>
        </div>
    )
}

export default CreateOrUpdate