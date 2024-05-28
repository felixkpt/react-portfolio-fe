
type Props = {
    items: string[]
}

const Slides = ({ items }: Props) => {
    return (
        <div className="mt-4">
            {
                items.map(item => {
                    return (
                        <div>
                            <div>{item.image}</div>
                            <div>{item.caption}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Slides