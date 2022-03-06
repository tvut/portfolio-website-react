export const ProjectCard = ({imgpng, imgweb, vid, source, link, tools, name, desc, dark}) => {
    return (
        <div className="card">
            { (imgpng || imgweb) &&
                (
                <picture>
                    {imgweb && (<source srcSet={imgweb} type="image/webp"/>)}
                    {imgpng && (
                        <>
                            <source srcSet={imgpng} type="image/png"/>
                            <img src={imgpng} />
                        </>
                    )}
                </picture>
                )
            }
            { vid && (
                <video autoPlay loop muted playsInline>
                    <source src={vid} type="video/mp4"/>
                </video>
            )}
            { source && (
                <a className="bottom" href={source}>
                    View Source
                    <i className="arrow right"></i>
                </a>
            )}
            { link && (
                <a className={`bottom ${dark ? "bottom-dark" : "bottom-light"}`} href={link}>
                    Visit Website<i className="arrow right"></i>
                </a>
            )}
            <div className="inner">
                <h4>{tools}</h4>
                <h3>{name}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}
export default ProjectCard