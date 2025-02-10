import { projectData } from "../data/projectData"

function Projects() {
    const data = projectData
    return (
        <>
            <section className="resume-section" id="projects">
                <div className="resume-section-content">
                    <h2 className="mb-5">Projects</h2>
                    {
                        data.map(e => {
                            return (
                                <div key={e.github} className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                    <div className="flex-grow-1">
                                        <h3 className="mb-0">{e.name}</h3>
                                        <p>{e.description}</p>

                                        Techology&ensp;=&ensp;{">"}
                                        {
                                            e.tech.map(tech => {
                                                return (
                                                    <span key={tech}>&ensp;{tech}&ensp;|
                                                    </span>
                                                )
                                            })
                                        }
                                        <p></p>
                                        <div>SOURCE CODE&ensp;👉&ensp;
                                            <a className="social-icon" href={e.github} target="blank"><i className="fab fa-github"></i></a>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0"><span className="text-primary">{e.time}</span></div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <hr className="m-0" />
        </>
    )
} export default Projects