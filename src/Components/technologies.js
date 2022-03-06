import TechColumn from "./techcolumn"

export const Technologies = () => {
    const technologies = [
        {
            name: "Languages",
            list: [
                "C",
                "Java",
                "HTML / CSS",
                "JavaScript",
                "Python",
                "PHP",
                "C++",
                "Bash"
            ]
        },
        {
            name: "Software",
            list: [
                "AWS",
                "Azure",
                "Wordpress",
                "Git",
                "Adobe Suite",
                "Docker"
            ]
        },
        {
            name: "Applications",
            list: [
                "Web Development",
                "Scripting",
                "Robotics"
            ]
        }
    ]
    return (
        <div className="container" style={{paddingTop: "0px"}}>
            <h2>Technologies</h2>
            <div>
                {technologies.map((t, index) => (<TechColumn key={index} name={t.name} list={t.list}/>))}
            </div>
        </div>
    )
}

export default Technologies