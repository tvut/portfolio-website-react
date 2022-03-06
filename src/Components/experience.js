export const ExperienceCard = ({position, company, start, end, body}) => {
    return (
        <div className="experience-card">
            <div className="titles">
                <h3>{position}</h3>
                <h4>{company}</h4>
                <h5>{start}{end ? " - "+end:""}</h5>
            </div>
            <div className="text">
                <p>{body}</p>
            </div>
        </div>
    )
}