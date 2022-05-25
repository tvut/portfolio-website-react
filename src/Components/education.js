export const Education = () => {
    return (
        <div className="container" style={{paddingTop: "0px"}}>
            <h2>Education</h2>
            <div>
                <div className="experience-card">
                    <div className="titles">
                        <h3>Bs.C. Honours Computer Science</h3>
                        <h4>McGill University</h4>
                        <h3>3.83 GPA</h3>
                        <h5>September 2020 - Present</h5>
                    </div>
                    <div className="text">
                        <p>Computer Science classes taken:
                            <ul>
                                <li><a href="https://www.mcgill.ca/study/2021-2022/courses/comp-250">Intro Data Structures</a></li>
                                <li><a href="https://www.mcgill.ca/study/2021-2022/courses/comp-206">Introduction to Software Systems</a></li>
                                <li><a href="https://www.mcgill.ca/study/2021-2022/courses/comp-273">Introduction to Computer Systems</a></li>
                                <li><a href="https://www.mcgill.ca/study/2021-2022/courses/comp-310">Operating Systems</a></li>
                                <li><a href="https://www.mcgill.ca/study/2021-2022/courses/math-240">Discrete Structures</a></li>
                                <li><a href="https://www.mcgill.ca/study/2021-2022/courses/comp-350">Numerical Computing</a></li>
                                <li><a href="https://www.mcgill.ca/study/2021-2022/courses/comp-322">Introduction to C++</a></li>
                                <li><a href="https://www.mcgill.ca/study/2021-2022/courses/comp-321">Programming Challenges</a></li>
                                <li><a href="https://www.mcgill.ca/study/2021-2022/courses/comp-302">Programming Languages and Paradigms</a></li>
                                <li><a href="https://www.mcgill.ca/study/2021-2022/courses/comp-252">Honours Algorithms and Data Structures</a></li>
                            </ul>
                        </p>
                        {/* <p>Current Computer Science classes:
                            <ul>
                            </ul>
                        </p> */}
                    </div>
                </div>
                <div className="experience-card">
                    <div className="titles">
                        <h4>Tesla STEM High School</h4>
                        <h3>4.0 GPA</h3>
                        <h5>September 2016 - June 2020</h5>
                    </div>
                    <div className="text">
                        <p>Computer Science classes taken:
                            <ul>
                                <li>Computer Science Principles</li>
                                <li>Introductory Java</li>
                                <li>Data Structures</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education