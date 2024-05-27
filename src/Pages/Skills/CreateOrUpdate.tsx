import { useNavigate } from "react-router-dom"
import RenderAsyncSelect from "../../components/RenderAsyncSelect"
import SubmitButton from "@/components/SubmitButton"
import useListSources from "../../hooks/list-sources/useListSources"
import { publish } from "@/utils/events"
import useAutoPostDone from "@/hooks/autos/useAutoPostDone"
import { useEffect } from "react"

const CreateOrUpdate = () => {
    // on success redirect to listing
    const navigate = useNavigate()
    const { event } = useAutoPostDone()
    useEffect(() => {
        if (event && event.status == 'success' && event.id === 'skillsForm') {
            navigate('/skills')
        }
    }, [event])

    const { portfolio: list_sources } = useListSources()

    return (
        <div>
            <form method='post' id="skillsForm" data-action={'/skills'} onSubmit={(e: any) => publish('autoPost', e)} className="flex justify-center">
                <div className="form-group">
                    <label className="form-label">Skill name</label>
                    <input type="text" name="name" id="name" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Start date</label>
                    <input type="datetime" name="start_date" id="start_date" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Experience</label>
                    <RenderAsyncSelect list_sources={list_sources} listSelects={undefined} current_key={'experience_level_id'} currentData={undefined} />
                </div>
                <div className="form-group">
                    <label className="form-label">Category</label>
                    <RenderAsyncSelect list_sources={list_sources} listSelects={undefined} current_key={'skill_category_id'} currentData={undefined} />
                </div>
                <div className="mt-2 d-flex justify-content-end">
                    <SubmitButton />
                </div>
            </form>
        </div>
    )
}

export default CreateOrUpdate