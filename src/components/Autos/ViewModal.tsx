import { useEffect, useState } from "react";
import SimpleTable from "./SimpleTable";
import { CollectionItemsInterface } from "@/interfaces/UncategorizedInterfaces";

type ModalShowProps = {
    record: object | null
    modelDetails?: CollectionItemsInterface
    size?: 'modal-sm' | 'modal-lg' | 'modal-xl'
    id?: string
}

const ViewModal: React.FC<ModalShowProps> = ({ record, modelDetails, size, id }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [modelName, setModelName] = useState<string>('Record')
    const [exclude, setExclude] = useState<string[]>([])
    const [htmls, setHtmls] = useState<string[]>([])

    useEffect(() => {

        if (record && Object.keys(record).length > 0) {
            setIsModalOpen(true)
        }

    }, [record])


    const [computedSize, setComputedSize] = useState<string>('')

    useEffect(() => {

        let length = 0
        if (record) {
            length = Object.keys(record).length
        }

        if (length > 0) {

            if (size)
                setComputedSize(size)
            else if (length < 8)
                setComputedSize('modal-sm')
            else if (length < 16)
                setComputedSize('modal-lg')
            else if (length > 16)
                setComputedSize('modal-xl')
        }

    }, [record]);

    useEffect(() => {
        if (modelDetails) {
            setModelName(modelDetails?.model_name || null);
            setExclude(modelDetails?.exclude || []);
            setHtmls(modelDetails?.htmls || []);
        }
    }, [modelDetails]);


    return (

        <div className={`modal fade automodal`} id={id || 'ViewModal'} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden={`${isModalOpen ? 'true' : 'false'}`}>

            <div className={`modal-dialog ${computedSize}`}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">View {modelName} #{record && record?.id}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {record &&
                            <div className="text-gray-200">
                                <SimpleTable record={record} exclude={exclude} htmls={htmls} />
                            </div>
                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ViewModal