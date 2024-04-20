import SubmitButton from "../../components/SubmitButton"
import { publish } from "../../utils/events"

const CreateOrUpdate = () => {

    return (
        <div>
            <form method='post' action-url={'/skills/create-or-update'} onSubmit={(e: any) => publish('ajaxPost', e)} className="flex justify-center">
                <div className="form-group">
                    <label className="form-label">Skill name</label>
                    <input type="text" name="name" id="name" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Start date</label>
                    <input type="datetime" name="start_date" id="start_date" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Level</label>
                    <input type="text" name="level_id" id="level_id" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Category</label>
                    <input type="text" name="skills_category_id" id="skills_category_id" className="form-control" />
                </div>
                <SubmitButton />
            </form>
        </div>
    )
}

export default CreateOrUpdate