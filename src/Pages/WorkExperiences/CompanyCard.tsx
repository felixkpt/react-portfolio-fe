import FormatDate from "../../utils/FormatDate"

type Props = {
    item: any
}

const CompanyCard = ({ item }: Props) => {
    return (
        <div className="col-md-12">
            <div className="shadow-sm rounded cursor-default pf-card pf-company-card row">
                <div className="col-xl-2">
                    <h6><span>{FormatDate.MMYY(item.start_date)}</span>
                        <span className="mx-1">—</span>
                        <span>{item.end_date ? FormatDate.MMYY(item.end_date) : 'Present'}</span></h6>
                </div>
                <div className="col-xl-10 pf-card-content">
                    <h5 className="col mb-4 d-flex gap-3 align-items-center">
                        <img className="pf-companies-image" src={`${item.image || ''}`} />
                        <span>{item.name}</span>
                    </h5>
                    <h6 className="text-white-50">{item.position}</h6>
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: (item.roles) }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyCard