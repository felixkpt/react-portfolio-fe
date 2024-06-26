import { useEffect, useRef, useState } from 'react';
import { publish, subscribe, unsubscribe } from '@/utils/events';
import RenderAsyncSelect from './RenderAsyncSelect';
import { DataInterface, ListSourceInterface, ModalSizeType } from '@/interfaces/UncategorizedInterfaces';
import Str from '@/utils/Str';
interface ModalProps {
    modelDetails?: any;
    record?: DataInterface | undefined
    modelName?: string;
    fillable?: { [key: string]: { input: string; type: string } };
    id?: string
    setKey?: React.Dispatch<React.SetStateAction<number>>;
    modalSize?: ModalSizeType
    list_sources?: { [key: string]: () => Promise<ListSourceInterface[]> };
    list_selects?: any
    computedSize?: string
    setComputedSize?: React.Dispatch<React.SetStateAction<string>>;
}

const AutoModalBody: React.FC<ModalProps> = ({ modelDetails, record, modalSize, id, setKey, list_sources, list_selects, computedSize, setComputedSize }) => {

    const [inputData, setInputData] = useState<{ [key: string]: string }>({});
    const [localKey, setLocalKey] = useState(0);
    const [hasFillable, setHasFillable] = useState(false);
    const [fillable, setFillable] = useState<{ [key: string]: any }[]>([]);
    const [method, setMethod] = useState("POST");

    const modalId = id || 'AutoModal'

    useEffect(() => {
        if (Object.keys(modelDetails).length > 0) {
            if (modelDetails?.fillable) {
                setFillable(modelDetails.fillable);
            }

        }
    }, [modelDetails]);

    useEffect(() => {

        const keys = Object.keys(fillable);
        const length = keys.length
        if (length > 0) {

            const tObj: { [key: string]: string } = {};
            keys.forEach((key: string) => {
                tObj[key] = '';
            });

            setHasFillable(true);

            if (Object.keys(record || {}).length > 0) {

                setMethod('put')

                for (const key in record) {
                    tObj[key] = record[key];
                }

                setInputData(tObj);
            } else {
                setInputData(tObj);
            }

            if (setComputedSize) {

                if (modalSize)
                    setComputedSize(modalSize)
                else if (length < 6)
                    setComputedSize('modal-sm')
                else if (length < 16)
                    setComputedSize('modal-lg')
                else if (length > 16)
                    setComputedSize('modal-xl')
            }
        }

    }, [fillable, record, setComputedSize])

    const errors = {};

    const firstErrorRef = useRef<HTMLDivElement>(null);

    const handleInputChange = (key: string, value: string) => {
        setInputData((prevInputData) => ({
            ...prevInputData,
            [key]: value,
        }));
    };

    useEffect(() => {
    }, [modelDetails]);

    useEffect(() => {
        if (errors && Object.keys(errors).length > 0 && !firstErrorRef.current) {
            const firstErrorKey = Object.keys(errors)[0];
            const firstErrorElement = document.getElementById(`form-group-section-${firstErrorKey}`);
            if (firstErrorElement) {
                firstErrorElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [errors]);

    const guessType = (name: any) => {
        if (fillable && fillable[name] && fillable[name].type) {
            return fillable[name].type;
        }
        return 'text';
    };

    useEffect(() => {

        subscribe('ajaxPostDone', handleAjaxPostDone as EventListener);

        return () => unsubscribe('ajaxPostDone', handleAjaxPostDone as EventListener);

    }, [])

    const handleAjaxPostDone = (event: CustomEvent<{ [key: string]: any }>) => {

        if (event.detail) {
            const detail = event.detail;

            if (detail.results) {
          
                if (detail.elementId === id && setKey) {
                    setTimeout(() => {
                        setKey((curr) => curr + 1);
                    }, 300);
                } else {
                    publish('reloadAutoTable', { tableId: modelDetails.tableId });
                }

                // close_modal
                const modal = document.querySelector(`#${modalId}`)
                if (modal && !modal.classList.contains('modal-static')) {
                    (modal.querySelector('button[data-bs-dismiss="modal"]') as HTMLElement)?.click()
                }
            }
        }
    };

    return (
        <div key={localKey}>
            {modelDetails ?
                <div className="container-fluid">
                    <input type="hidden" name="_method" value={method} />

                    <div className="row">
                        {hasFillable ? (
                            Object.keys(fillable).map((key: any) => {
                                const obj = fillable[key]
                                const { input, type, min, max, rows, capitalize } = obj;
                                const accept = obj.accept || '*'

                                const current_key = key.replace(/_multilist$/, '_list')

                                const currentData = inputData[current_key.replace(/_list|_id/, '')]

                                return (
                                    <div key={current_key} className={`col-12 ${computedSize !== 'modal-sm' ? 'col-md-6 col-xl-6' : ''} d-flex align-items-${type === 'checkbox' ? 'end' : 'center'}`}>
                                        <div className="form-group mb-3 w-100" id={`form-group-section-${current_key}`}>
                                            <div className="mb-2 block">
                                                {
                                                    type !== 'checkbox' &&
                                                    <label htmlFor="small">{Str.title(capitalize ? Str.upper(current_key) : current_key)}</label>
                                                }
                                            </div>
                                            {input === 'input' && type === 'checkbox' && (
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        id={current_key}
                                                        type='checkbox'
                                                        name={current_key}
                                                        defaultChecked={!!inputData[current_key]}
                                                        defaultValue={inputData[current_key] ? '1' : '0'}
                                                        onChange={(e) => handleInputChange(current_key, e.target.checked ? '1' : '0')}
                                                    />
                                                    <label className="form-check-label" htmlFor={current_key}>
                                                        {Str.title(capitalize ? Str.upper(current_key) : current_key)}
                                                    </label>
                                                </div>

                                            )}
                                            {input === 'input' && (type === 'number') && (
                                                <input
                                                    min={min || undefined}
                                                    max={max || undefined}
                                                    className="form-control"
                                                    id={current_key}
                                                    type='number'
                                                    name={current_key}
                                                    defaultValue={inputData[current_key] || (min ? min : '0')}
                                                    onChange={(e) => handleInputChange(current_key, e.target.value)}
                                                />
                                            )}
                                            {input === 'input' && type === 'file' && (
                                                <div>
                                                    <input
                                                        className="form-control"
                                                        id={current_key}
                                                        type="file"
                                                        name={current_key}
                                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                            const files = e.target.files;
                                                            const fileNames = files ? Array.from(files).map((file) => file.name).join(', ') : '';
                                                            handleInputChange(current_key, fileNames);
                                                        }}
                                                        key={current_key}
                                                        accept={accept}
                                                    />
                                                    <small>{inputData[current_key] || ''}</small>
                                                </div>
                                            )}
                                            {input === 'input' && (type !== 'number' && type !== 'checkbox' && type !== 'file') && (
                                                <input
                                                    min={1}
                                                    className="form-control"
                                                    id={current_key}
                                                    type={guessType(current_key)}
                                                    name={current_key}
                                                    defaultValue={inputData[current_key] || ''}
                                                    onChange={(e) => handleInputChange(current_key, e.target.value)}
                                                />
                                            )}

                                            {input === 'select' && type === 'multi' && <RenderAsyncSelect list_sources={list_sources} list_selects={list_selects} current_key={current_key} currentData={currentData} isMulti={true} />}

                                            {input === 'select' && type !== 'multi' && <RenderAsyncSelect list_sources={list_sources} list_selects={list_selects} current_key={current_key} currentData={currentData} isMulti={false} />}

                                            {input === 'textarea' && (
                                                <textarea
                                                    id={current_key}
                                                    className="form-control"
                                                    name={current_key}
                                                    defaultValue={inputData[current_key] || ''}
                                                    onChange={(e) => handleInputChange(current_key, e.target.value)}
                                                    key={current_key}
                                                    rows={rows || 7}
                                                ></textarea>
                                            )}
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <p>Model has no fillable fields.</p>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => { setLocalKey(localKey + 1); setKey && setKey(localKey + 1) }} data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary submit-button">Submit</button>
                    </div>
                </div>
                : 'Model data incomplete'
            }
        </div>
    );
};

export default AutoModalBody;
