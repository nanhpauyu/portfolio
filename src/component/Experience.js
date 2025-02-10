import { experienceData } from '../data/experienceData.js'
function Experience() {
    const data = experienceData
    return (
        <>
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                    {
                        data.map((e,i) => {
                            return (
                                <div key={i}>
                                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5" >
                                        <div className="flex-grow-1">
                                            <h3 className="mb-0">{e.title}</h3>
                                            <div className="subheading">{e.company}&emsp;-&emsp;{e.location}</div>
                                            <div className="subheading mb-3" style={{ fontWeight: '300', fontSize: '1.5rem' }}>{e.project}</div>
                                            <ul>
                                                {
                                                    e.jd.map((e,i) => {
                                                        return (
                                                            <li key={i}>{e}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className="flex-shrink-0"><span className="text-primary">{e.start} - {e.end}</span></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <hr className="m-0" />
        </>
    )
} export default Experience;