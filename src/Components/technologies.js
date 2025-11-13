import TechColumn from "./techcolumn"

export const Technologies = () => {
    const technologies = [
        {
            name: "Languages",
            list: [
                "Python",
                "C++",
                "C",
                "Java",
                "JavaScript",
                "SQL",
            ]
        },
        {
            name: "Tools",
            list: [
                "Google Cloud (GCP)",
                "Amazon Web Services (AWS)",
                "Docker",
                "Github Actions",
                "Git",
                "Cmake",
                "clang-tidy"
            ]
        },
        {
            name: "Frameworks",
            list: [
                "Svelte",
                "React.js",
                "Vue.js",
                "Django",
                "Wordpress",
                "Tailwind",
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