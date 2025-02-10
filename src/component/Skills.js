import django from '../img/icon/django.svg'
import api from '../img/icon/api.svg'
import flask from '../img/icon/flask.svg'
import numpy from '../img/icon/numpy.svg'
import pandas from '../img/icon/pandas.svg'
import selenium from '../img/icon/selenium.svg'
import vs_code from '../img/icon/vs_code.svg'
import sql from '../img/icon/sql.svg'
import nosql from '../img/icon/nosql.svg'
import python from '../img/icon/python.svg'
import html from '../img/icon/html.svg'
import css from '../img/icon/css.svg'
import bootstrap from '../img/icon/bootstrap.svg'
import tailwind from '../img/icon/tailwind-css.svg'
import js from '../img/icon/js.svg'
import react from '../img/icon/react.svg'
import docker from '../img/icon/docker.svg'
import aws from '../img/icon/aws.svg'
import github from '../img/icon/github.svg'
import linux from '../img/icon/linux.svg'
import postgresql from '../img/icon/postgresql.svg'


function Skills() {
    return (
        <>
            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages & Tools</div>
                    <ul className="list-inline dev-icons">
                        {/* python */}
                        <li className="list-inline-item"><img src={python} style={{ width: "40px" }} alt="Python Logo" /></li>
                        <li className="list-inline-item"><img src={django} style={{ width: "40px" }} alt="Django Logo" /></li>
                        <li className="list-inline-item"><img src={flask} style={{ width: "40px" }} alt="Flask Logo" /></li>
                        <li className="list-inline-item"><img src={numpy} style={{ width: "40px" }} alt="Numpy Logo" /></li>
                        <li className="list-inline-item"><img src={pandas} style={{ width: "40px" }} alt="Pandas Logo" /></li>
                        <li className="list-inline-item"><img src={selenium} style={{ width: "40px" }} alt="Selenium Logo" /></li>
                        {/* html */}
                        <li className="list-inline-item"><img src={html} style={{ width: "40px" }} alt="Html Logo" /></li>
                        {/* CSS */}
                        <li className="list-inline-item"><img src={css} style={{ width: "40px" }} alt="CSS Logo" /></li>
                        <li className="list-inline-item"><img src={bootstrap} style={{ width: "40px" }} alt="Bootstrap Logo" /></li>
                        <li className="list-inline-item"><img src={tailwind} style={{ width: "40px" }} alt="Tailwind Logo" /></li>
                        {/* Javascript */}
                        <li className="list-inline-item"><img src={js} style={{ width: "40px" }} alt="JS Logo" /></li>
                        <li className="list-inline-item"><img src={react} style={{ width: "40px" }} alt="React Logo" /></li>
                        {/* Database */}
                        <li className="list-inline-item"><img src={sql} style={{ width: "40px" }} alt="SQL Logo" /></li>
                        <li className="list-inline-item"><img src={nosql} style={{ width: "40px" }} alt="MongoDB Logo" /></li>
                        <li className="list-inline-item"><img src={postgresql} style={{ width: "40px" }} alt="PostgreSQL Logo" /></li>
                        {/* cloud and services */}
                        <li className="list-inline-item"><img src={linux} style={{ width: "40px" }} alt="Linux Logo" /></li>
                        <li className="list-inline-item"><img src={docker} style={{ width: "40px" }} alt="Docker Logo" /></li>
                        <li className="list-inline-item"><img src={aws} style={{ width: "40px" }} alt="AWS Logo" /></li>
                        {/* CICD */}
                        <li className="list-inline-item"><img src={github} style={{ width: "40px" }} alt="Github Logo" /></li>
                        {/* IDE */}
                        <li className="list-inline-item"><img src={vs_code} style={{ width: "40px" }} alt="VS Code Logo" /></li>

                    </ul>
                    <div className="subheading mb-3">Workflow</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Clean Code Practices & PEP 8 Standards
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            REST API Development with Django REST Framework
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Data Cleaning & Preprocessing Pipelines
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Unit Testing & Continuous Integration
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Version Control with Git & GitHub
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Cross Functional Teams
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Agile Development & Scrum
                        </li>
                    </ul>
                </div>
            </section>
            <hr className="m-0" />
        </>
    )
} export default Skills;