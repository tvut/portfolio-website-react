import { ExperienceCard } from "./experience"

export const Experiences = () => {
    const experience = [
        {
          position: "TEAM Mentor",
          company: "McGill CSUS",
          start: "January 2022",
          end: "Present",
          body: "Working as a tutor for the helpdesk at the McGill Computer Science Undergraduate Society tutoring other McGill students on classes I had previously taken, as well as other introductory level Java, Python and C courses."
        },
        {
          position: "Front End Developer",
          company: "UAEM McGill",
          start: "December 2021",
          end: "Present",
          body: "Collaborating in a small team to build a Personal Protective Equipment Tracker developed in React.js with Tailwind CSS. My team is working with the backend team to connect the frontend to the backend built in MongoDB."
        },
        {
          position: "Lead Programmer",
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
        },
        {
          position: "Teaching Intern",
          company: "Blaze Robotics",
          start: "August 2019",
          end: "",
          body: "Designed the week-long curriculum for all levels of VEX EDR taught at summer camp. Taught robotics summer camps to a small group of K-8 kids. Assisted the director in fostering elementary/middle school students' interest in robotics. Taught basic C++ to summer camp participants as well as engineering design principles."
        },
        {
          position: "App Development Intern",
          company: "SAP Concur",
          start: "January 2018",
          end: "May 2018",
          body: "Directed a small team in developing an Andriod app built in Java that utilized a weather API to dynamically adjust background tasks. Pitched final prototype to Concur's head of app development."
        }
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