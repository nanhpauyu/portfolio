import { awardData } from "../data/awardData";
function Awards() {
    const data = awardData;
    return (
        <>
            <section className="resume-section" id="awards">
                <div className="resume-section-content">
                    <h2 className="mb-5">Awards & Certifications</h2>
                    <ul className="fa-ul mb-0">
                        {
                            data.map((e,i) => {
                                return (
                                    <li key={i}>
                                        <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                                        <a href={e.link}  style ={{textDecoration:'none'}}>{e.name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    )
} export default Awards;