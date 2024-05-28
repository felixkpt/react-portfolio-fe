import { ProjectSlideInterface } from "../../../../interfaces/PortfolioInterfaces"
import SlidesComponent from "./SlidesComponent"


type Props = {
    items: ProjectSlideInterface[]
}

const Slides = ({ items }: Props) => {
    return (
        <>
            <h5>Key Sections</h5>
            <SlidesComponent slides={items} />
        </>
    )
}

export default Slides