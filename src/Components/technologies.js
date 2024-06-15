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
                "JavaScript ES6"
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
                "Jira",
                "Confluence",
                "Cmake",
                "clang-tidy"
            ]
        },
        {
            name: "Frameworks",
            list: [
                "React.js",
                "Vue.js",
                "Django",
                "Wordpress",
                "Tailwind CSS",
                "Bootstrap"
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