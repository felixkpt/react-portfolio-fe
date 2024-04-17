import { publish } from "../../utils/events"

const UpdateOrCreate = () => {
    return (
        <div>
            <form method='post' action-url={'/about/update-or-create'} onSubmit={(e: any) => publish('ajaxPost', e)} className="flex justify-center">
                <div className="form-group">
                    <div className="form-label">About Me</div>
                    <textarea className="form-control" name="content"></textarea>
                    <div className="mt-2 d-flex justify-content-end"><button type="submit" className="btn btn-primary">Submit</button></div>
                </div>
            </form>
        </div>
    )
}

export default UpdateOrCreate