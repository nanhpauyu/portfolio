import leetcode from '../img/icon/leetcode.svg'

function About() {
    return (
        <>
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Nan
                        <span className="text-primary">Hpauyu</span>
                    </h1>
                    <div className="subheading mb-5">
                        Halifax Ct&ensp;·&ensp;Denver, CO 80249&ensp;·&ensp;(641) 819-1480&ensp;·&ensp;
                        <a href="mailto:name@email.com">nan.hpauyu@yahoo.com</a>
                    </div>
                    <p className="lead mb-5">Motivated Software Developer with three years of experience in developing and maintaining enterprise applications across IT, Blockchain, and E-commerce industries. Proficient in building projects from the ground up and enhancing legacy systems with efficient new features. Skilled in Python, Django, Flask, Web Scraping, NumPy, Pandas, ReactJS, RESTful APIs, and Cloud Deployment services.</p>
                    <div className="social-icons">
                        <a className="social-icon" href="https://www.linkedin.com/in/nanhpauyu/" target="blank"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="https://github.com/nanhpauyu" target="blank"><i className="fab fa-github"></i></a>
                        <a className="social-icon" href="https://www.hackerrank.com/profile/hpauyunanshawng" target="blank"><i className="fa-brands fa-hackerrank"></i></a>
                        {/* <a className="social-icon" href="https://leetcode.com/u/hpauyu/" target="blank"><img src={leetcode} style={{ height: "24px", width: "24px" }} alt="Leetcode Logo" /></a> */}
                    </div>
                </div>
            </section>
            <hr className="m-0" />
        </>
    )
} export default About;