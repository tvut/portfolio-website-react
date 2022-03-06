export const TechColumn = ({name, list}) => {
    return (
        <div className="tri">
            <h3>{name}</h3>
            {list.map((t) => (<h4>{t}</h4>))}
        </div>
    )
}
export default TechColumn