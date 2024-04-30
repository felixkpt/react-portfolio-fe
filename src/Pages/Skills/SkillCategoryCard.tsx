import { baseURL } from "../../utils/helpers"
import SkillCard from "./SkillCard"

type Props = {
  item: any
}

const SkillCategoryCard = ({ item }: Props) => {
  return (
    <div className="col-md-4">
      <div className="shadow-sm pf-card pf-card-transform rounded pf-skill-cat-card">
        <h5 className="col mb-2 d-flex gap-3">
          <img className="pf-skill-cat-image" src={baseURL(`assets/${item.image || ''}`)} />
          <span>{item.name}</span>
        </h5>
        <div className="pf-card-content">
          {
            item.skills.map((item) => <SkillCard item={item} />)
          }
        </div>
      </div>
    </div>
  )
}

export default SkillCategoryCard