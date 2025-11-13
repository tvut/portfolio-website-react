
import Experiences from './Components/experiences';
import './Assets/Dev/main.css'
import './Assets/Dev/responsive.css'
import Projects from './Components/projects';
import Technologies from './Components/technologies';
import { useState } from 'react';
import Education from './Components/education';
import Footer from './Components/footer';
// import Music from './Components/music';

function App() {
  const key = "darkMode"
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      // console.log("pulled from storage: "+item)
      return item ? JSON.parse(item) : window.matchMedia("(prefers-color-scheme: dark)").matches
    } catch (error) {
      console.log(error)
      return false
    }
  })
  // console.log(darkMode)

  const toggleDark = () => {
    setDarkMode(!darkMode)
    try {
      window.localStorage.setItem(key, !darkMode)
      // console.log("stored dark mode as "+!darkMode)
    } catch (e) {
      console.error("Error in setting preference")
    }
  }

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <div className="half-center">
          <h1>Hello. I'm Tristan.</h1>
        </div>
        <div className="small-socials">
          <div className="container">
            <a onClick={toggleDark}>
              <i className="fa-solid fa-moon"></i>
            </a>
            <a href="https://www.linkedin.com/in/tristanstev/">
              <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/tvut">
              <i className="fa-brands fa-github" aria-hidden="true"></i>
            </a>
            <a href="mailto:contact@tristanst.com">
              <i className="fa-solid fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className={darkMode ? "bg-dark" : "bg"}>
          <div className="container" style={{ paddingBottom: "0" }}>
            <p>
              I'm a recent graduate of McGill University who's passionate about making things work together fast. I have experience integrating every part of the stack, but I enjoy solving distributed problems where speed and stability matter.
            </p>
            <Experiences />
            <h2 style={{ marginBottom: "15px" }}>Research</h2>
            <div className="experience-card">
              <div className="titles">
                <h3>Undergraduate Research</h3>
                <h3>Under Supervision of <a href='https://www.cs.mcgill.ca/~martin/'>Martin Robilliard</a></h3>
                <h4>AST Matching in Casdoc</h4>
                <h5>January 2024 - May 2024</h5>
              </div>
              <div className="text">
                <p>Designed an easy to use matching language to match ranges in source code based on AST nodes in Java Code.</p>
                <p style={{marginTop: "12px"}}>Built an automated code annotator that extracts ranges from source code based on user provided matchers built in the new matching language
                  and generates an HTML output file where user provided HTML snippets are bound to matched ranges.</p>
              </div>
            </div>
            <h2 style={{ marginBottom: "15px" }}>Projects</h2>
          </div>
          <Projects dark={darkMode} />
          <Technologies />
          <Education />
        </div>
      </div>
      <Footer dark={darkMode} toggleDark={toggleDark} />
    </>
  );
}

export default App;
