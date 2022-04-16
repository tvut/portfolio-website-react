import TechColumn from "./techcolumn"

export const Technologies = () => {
    const technologies = [
        {
            name: "Languages",
            list: [
                "C++",
                "C",
                "Python",
                "Java",
                "HTML",
                "CSS / SASS",
                "JavaScript ES6",
                "PHP",
                "Bash",
                "Ocaml"
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
                "Docker",
                "Express",
                "React.js"
            ]
        },
        {
            name: "Applications",
            list: [
                "Frontend Web Development",
                "Backend Web Development",
                "Web Design",
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