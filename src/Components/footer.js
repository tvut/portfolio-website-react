export const Footer = ({dark, toggleDark}) => {    
    return (
        <>
            <div className="contact-bar">
                <div className="container">
                    <a className="social" href="https://www.linkedin.com/in/tristanstev/">
                        <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                        <h3>@tristanstev</h3>
                    </a>
                    <a className="social" href="https://github.com/tvut">
                        <i className="fa-brands fa-github" aria-hidden="true"></i>
                        <h3>@tvut</h3>
                    </a>
                    <a className="social" href="mailto:contact@tristanst.com">
                        <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                        <h3>contact@tristanst.com</h3>
                    </a>
                    <a className="social" onClick={toggleDark}>
                        <i className="fa-solid fa-moon" aria-hidden="true"></i>
                        <h3>{dark ? "Light Mode" : "Dark Mode"}</h3>
                    </a>
                </div>
            </div>
            <footer>
                <div className="container">
                    <p style={{marginBottom:"20px"}}>Designed by me in 2024.</p>
                    <p>Thanks for visiting! Feel free to check out my <a href="https://x.tristans.ca">photoblog</a> as well.</p>
                </div>
            </footer>
        </>
    )
}
export default Footer