import { ExperienceCard } from "./experience"

export const Experiences = () => {
    const experience = [
      {
        position: "Software Engineering Intern",
        company: "Gecko Robotics",
        start: "September 2023",
        end: "December 2023",
        body: "Working on the next generation of robot control."
      },
      {
        position: "Software Development Intern",
        company: "Coveo",
        start: "September 2023",
        end: "December 2023",
        body: "Worked on large scale C++ refactoring using clang-tidy and AST tree matchers. Planned out migrations from legacy code to newer stdlib equivalents then wrote clang-tidy rules to automatically do code conversions based on AST tree traversals. Rearchitected over 50 incompatible classes and cascading fallout. Investigated legacy bugs and why equivalent code conversions led to undefined behavior. Rewrote 40,000 lines of code in a 2 million line codebase and removed 8,000 lines of newly sunsetted code."
      },
      {
        position: "Software Engineering Intern",
        company: "Capital One",
        start: "June 2023",
        end: "August 2023",
        body: "Built a serverless producer/consumer pipeline with Apache Kafka on AWS Lambdas to automate underwriting workflows. Schemas were developed in AVRO and then manipulated a MySQL database mapped with Spring. Unit testing was done in JUnit with mock DBs and run in a developer Docker environment, developer environment, QA environment, then finally pushed to production after following an acceptance test driven development model."
      },
      {
        position: "Software Development Intern",
        company: "RareCyte",
        start: "May 2022",
        end: "August 2022",
        body: "In charge of rewriting a C++ robotic instrument controller from a Windows Desktop App to a Progressive Web App. Rewrote the instrument controller to use MQTT IOT protocols and developed language agnostic schemas for commands sent through the protocol. Developed a Vue.js/Django frontend to interact with the instrument controller. Defined constraints for software inputs in collaboration with the biology and software teams and developed a new configuration environment to change instrument settings. Tested the controller with the instrument and observed up to a 50% scan speedup compared to previous workflows."
      },
      {
        position: "Front End Developer",
        company: "UAEM McGill",
        start: "December 2021",
        end: "Present",
        body: "Collaborating in a small team to build a Personal Protective Equipment Tracker developed in React.js with Tailwind CSS for local organizations in Montreal. Working closely with the backend team to maintain a Docker setup for the multiple databases and helping to maintain and edit the Express.js REST endpoints as necessary."
      },
        {
          position: "TEAM Mentor",
          company: "McGill CSUS",
          start: "January 2022",
          end: "April 2022",
          body: "Working as a tutor for the helpdesk at the McGill Computer Science Undergraduate Society tutoring other McGill students. Tutoring computer science concepts such as algorithms and data structures. Guiding tutees on best debugging practices and how to get the expected behavior from their code. Explaining computer science paradigms and good software design principles. Demonstrating proper syntax and how to learn proper syntax from software documentation."
        },
        {
          position: "Robotics Programmer",
          company: "Quantum Robotics",
          start: "September 2016",
          end: "May 2020",
          body: "Served as the lead programmer on a Vex Robotics Competition team, coding driver functions, semi-autonomous functions as well as fully autonomous functions in C and C++. Took advantage of hardware sensors and threading to build user code that would prolong running time before performance dropoff as well as increase the lifespan of hardware."
        },
        {
          position: "Web Developer",
          company: "Model United Nations Northwest",
          start: "December 2017",
          end: "November 2019",
          body: "Served as Under-Secretary-General of Technology on eight Secretariats for Model United Nations conferences run by Model United Nations Northwest, an organization dedicated to supporting the Model United Nations circuit in Washington State. I was in charge of web development as well conference IT, which involved managing our network setup and managing GSuite accounts for our staff members. I designed, developed and maintained four different websites for different conferences. Websites were built in PHP/HTML, CSS, JS, and JQuery. Optimization tools including Google Lighthouse and BrowserStack were used to ensure fast and consistent performance."
        }
        // {
        //   position: "Teaching Intern",
        //   company: "Blaze Robotics",
        //   start: "August 2019",
        //   end: "",
        //   body: "Designed the week-long curriculum for all levels of VEX EDR taught at summer camp. Taught robotics summer camps to a small group of K-8 kids. Assisted the director in fostering elementary/middle school students' interest in robotics. Taught basic C++ to summer camp participants as well as engineering design principles."
        // },
        // {
        //   position: "App Development Intern",
        //   company: "SAP Concur",
        //   start: "January 2018",
        //   end: "May 2018",
        //   body: "Directed a small team in developing an Andriod app built in Java that utilized a weather API to dynamically adjust background tasks. Pitched final prototype to Concur's head of app development."
        // }
      ]
    return (
       <>
       <h2>Experience</h2>
       {experience.map((exp, index) => (
                <ExperienceCard key={index} position={exp.position} company={exp.company} start={exp.start} end={exp.end} body={exp.body}/>
        ))}
       </>
    )
}

export default Experiences