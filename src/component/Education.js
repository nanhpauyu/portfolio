import { educationData } from "../data/educationData";
import { Fragment } from 'react'
function Education() {
    const data = educationData;
    return (
        <>
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    {
                        data.map((e, i) => {
                            return (
                                <Fragment key={`${e.degree}-${e.school}`}>
                                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                        <div className="flex-grow-1">
                                            <h3 className="mb-0">
                                                {e.school} - <span style={{ fontWeight: '300', fontSize: '1.5rem' }}>{e.location}</span>
                                            </h3>
                                            <div className="subheading mb-3">{e.degree}</div>
                                            {e.note && <div>{e.note}</div>}
                                            <div>
                                                Courses&ensp;=&ensp;{">"}
                                                {
                                                    e.course.map((course, ix) => (
                                                        <span key={course}>&ensp;{course}&ensp;|</span>
                                                    ))
                                                }
                                            </div>
                                            <div>
                                                GPA: {e.gpa}
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0"><span className="text-primary">{e.start} - {e.end}</span></div>
                                    </div>
                                </Fragment>
                            );
                        })
                    }
                </div>
            </section>
            <hr className="m-0" />
        </>
    );

} export default Education;