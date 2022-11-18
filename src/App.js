
import Experiences from './Components/experiences';
import './Assets/Dev/main.css'
import './Assets/Dev/responsive.css'
import Projects from './Components/projects';
import Technologies from './Components/technologies';
import { useState, useEffect } from 'react';
import Education from './Components/education';
import Footer from './Components/footer';
import Music from './Components/music';

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
              <a href="mailto:contact@tristans.ca">
                  <i className="fa-solid fa-envelope" aria-hidden="true"></i>
              </a>
          </div>
      </div>
      <div className={darkMode ? "bg-dark" : "bg"}>
          <div className="container" style={{paddingBottom:"0"}}>
              <p>
                  I'm a third year student at McGill University who's passionate about high performance systems or robotics applications. I also have experience with frontend development and building full stack applications. 
              </p>
              <Experiences/>
              <h2 style={{marginBottom: "15px"}}>Projects</h2>
          </div>
          <Projects dark={darkMode}/>
          <Technologies/>
          <Education/>
      </div>
    </div>
    <Footer dark={darkMode} toggleDark={toggleDark}/>
    </>
  );
}

export default App;
