export const TechColumn = ({name, list}) => {
    return (
        <div className="tri">
            <h3>{name}</h3>
            {list.map((t, index) => (<h4 key={index}>{t}</h4>))}
        </div>
    )
}
export default TechColumn